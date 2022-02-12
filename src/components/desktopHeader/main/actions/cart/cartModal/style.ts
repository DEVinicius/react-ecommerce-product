import styled from "styled-components";
import { colors } from "../../../../../../config/colors";

export const Container = styled.div`
  background: ${colors.white};
  height: 20rem;
  width: 20rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);

  position: fixed;
  border-radius: 0.25rem;
  margin-top: 1rem;

  @keyframes slidein {
    from {
      width: 0%;
    }

    to {
      width: 20rem;
    }
  }

  animation-duration: 1s;
  animation-name: slidein;
`;
