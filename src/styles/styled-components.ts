import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: black;
  color: white;
  width: max-content;
  min-width: 68px;
  height: 6vh;
  border-radius: 8px;
  border: none;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
`;

export const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: max-content;
  height: 30px;
  border-radius: 8px;
  border: 1px solid lightgray;
  margin-bottom: 8px;
`;

export const Label = styled.h1`
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  width: 20vw;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .ant-collapse-item {
    background-color: white;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: black;
    border-color: black;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  height: 48px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PriceDisplay = styled.div`
  display: flex;
`;

export const Errors = styled.p`
  color: red;
  font-size: 14px;
`;
