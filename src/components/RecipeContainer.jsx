import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 300px;
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
`;

export const IngridientsText = styled.span`
  font-size: 18px;
  border: solid 1px #198754;
  background-color: #198754;
  color: #fff;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  margin-botton: 12px;
`;

export const SeeMoreText = styled(IngridientsText)`
  font-size: 18px;
  border: solid 1px #dc3545;
  background-color: #fff;
  color: #dc3545;
  margin: 10px 0;
`;