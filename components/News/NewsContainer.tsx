import { NextComponentType, NextPageContext } from "next";
import { NewsType } from "../../types/NewsType";
import { ContainerWrapper,NewsHeader ,NewsID, NewsTitle, NewsBody } from "./styles"

type Props = {
  news_item: NewsType
}

const NewsContainer: NextComponentType<NextPageContext, {}, Props> = ({ news_item }) => {
  const { id, title, body } = news_item;
  return (
    <ContainerWrapper>
      <NewsHeader>
        <NewsID>{"#"+id}</NewsID>
        <NewsTitle>{title}</NewsTitle>
      </NewsHeader>
      <NewsBody>
        {body}
      </NewsBody>
    </ContainerWrapper>
  )
}
export default NewsContainer