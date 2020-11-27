import styled, { createGlobalStyle } from "styled-components";
import BImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%
}
body {
    background-image: url(${BImage});
    background-size: cover;
    margin:0;
    padding: 0,20px;
    display: flex;
    justify-content:center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    background-color: #080808;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
  h1 {
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    margin: 20px;
    background-color: #d8afaf;
    padding: 10px;
    border-radius: 46px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .start {
    width: 200px;
  }
`;

export const QuestionCardWrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const QuestioonButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background-color: ${({ correct, userClicked }) =>
      correct
        ? "green"
        : // "linear-gradient(90deg, #56ffa4, #59bc86)"
        !correct && userClicked
        ? "red"
        : "#02242f"};
    border: 3px solid white;
    border-radius: 10px;
    color: #ccc;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.8);
  }
`;
