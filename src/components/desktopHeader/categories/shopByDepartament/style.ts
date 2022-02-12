import { colors } from "../../../../config/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainHeader = styled.div`
  color: ${colors.black};
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 20rem;

  padding: 1rem;

  @keyframes slidein {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  hr {
    border: none;
  }

  &:hover {
    cursor: pointer;

    hr {
      border: ${colors.black} 1px solid;
      animation-duration: 2s;
      animation-name: slidein;
    }
  }

  div {
    margin: 0.1rem 0 0 0;
  }
`;

export const Departaments = styled.div`
  @keyframes opacityOn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);

  width: 20rem;

  animation-duration: 2s;
  animation-name: opacityOn;

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10rem;
  z-index: 2;

  background: ${colors.black};

  a {
    color: ${colors.black};
    padding: 1rem;
    width: 100%;
    text-align: center;
    transition: 0.5s;
    &:hover {
      background: ${colors.primary};
      color: ${colors.black};
    }
  }
`;
