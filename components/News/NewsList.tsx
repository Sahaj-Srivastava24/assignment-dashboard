import type { NextComponentType, NextPageContext } from "next";
import { Heading, NewsWrapper } from "./styles";
import { NewsType } from "../../types/NewsType";
import NewsContainer from "./NewsContainer";

const NewsList: NextComponentType<NextPageContext,{}, {news : NewsType[]}> = ({news}) => {
  
  return(
    <NewsWrapper>
      {news.map((news_item, index) => (
        <NewsContainer key={index} news_item={news_item} />
      ))}
    </NewsWrapper>
  )
}

export default NewsList