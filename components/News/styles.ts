import styled from "@emotion/styled";

export const Heading = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin: 2rem;
  line-height: 50px;
  font-weight: bold;
`;

export const NewsWrapper = styled.div`
  margin: 0;
  padding: 0;
`

export const ContainerWrapper = styled.div`
  margin: 1% 10%;
  padding: 1rem 3rem;
  background-color: #f2f2f2;
`

export const NewsHeader = styled.div`
  display: flex;`

export const NewsID = styled.h1`
  font-size: 4.5rem;
  color: #adadad;
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
export const NewsTitle = styled.div`
  padding-left: 1rem;
  font-size: 2.5rem;
  display: flex;
  align-items: flex-end;
  color: #383838;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const NewsBody = styled.div`
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #4f4f4f;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`