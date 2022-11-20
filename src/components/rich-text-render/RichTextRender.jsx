import { useEffect, useState } from "react";
import useContentful from "../../useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

const RichTextRender = () => {
  const [articles, setArticles] = useState([]);
  const { getArticles } = useContentful();
  useEffect(() => {
    getArticles().then((response) => response && setArticles(response));
  }, []);
  return (
    <RichTextWrapper>
      <RichTextContainer>
        {articles.map((article) => (
          <>
            <h2>{article.articleTitle}</h2>
            {article.articleContent.content.map((content) =>
              documentToReactComponents(content)
            )}
          </>
        ))}
      </RichTextContainer>
    </RichTextWrapper>
  );
};

export default RichTextRender;

const RichTextWrapper = styled.section`
  padding: 3rem 4rem;
  margin: 1rem 0;
`;
const RichTextContainer = styled.div`
  padding: 2rem;
  border-left: 8px solid #2bcdbc;
  border-right: 8px solid #2bcdbc;
  h2 {
    text-align: center;
    color: #002856;
    margin-bottom: 32px;
  }
  li {
    margin: 2rem 0;
  }
`;
