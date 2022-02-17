import './App.css';
import searchicon from './search-icon.svg';
import hamburger from './hamburger.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, AppName, AppIcon, SearchBar, SearchIcon, SearchInput } from './components/Header';
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngridientsText, SeeMoreText } from './components/RecipeContainer';
import Axios from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

const Application_ID = "4b872d2d";
const Application_Keys = 'fcf36c6e666db0508bd526cbbe1c6bfb';

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipe } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id='alert-dialog-slide-title'>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipe.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <DialogActions>
            <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
            <IngridientsText onClick={() => window.open(recipe.url)}>See More</IngridientsText>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipe.image} />
        <RecipeName>{recipe.label}</RecipeName>
        <IngridientsText onClick={() => setShow(true)}>Ingridients</IngridientsText>
        <SeeMoreText onClick={() => window.open(recipe.url)}>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
    </>
  );
}

function App() {


  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${Application_ID}&app_key=${Application_Keys}`
    );
    updateRecipeList(response.data.hits);
  };

  //~ Debounce search input
  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <AppIcon src={hamburger} />
          Recipe Finder
        </AppName>
        <SearchBar>
          <SearchIcon src={searchicon} />
          <SearchInput onChange={onTextChange} placeholder='Search Recipe' />
        </SearchBar>
      </Header>

      <RecipeListContainer>
        {recipeList.length ? recipeList.map((recipe, index) => (
          <RecipeComponent key={index} recipe={recipe.recipe} />
        )) : <Placeholder src={hamburger} />}
      </RecipeListContainer>
    </Container >
  );
}

export default App;
