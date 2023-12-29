import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  overflow-x: hidden;

  @media (max-width: 1440px) {
    gap: 24px;
  }
  @media (max-width: 1320px) {
    overflow-x: scroll;
  }
  @media (max-width: 512px) {
    gap: 16px;
  }

  @media (max-width: 428px) {
    gap: 14px;
  }
`;
