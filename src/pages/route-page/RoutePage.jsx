import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RoutePage = () => {
  const { state } = useLocation();
  const { articleTitle, articleImage, articleContent } = state.article;
  return (
    <PageWrapper>
      <PageTite>{articleTitle}</PageTite>
      <img src={articleImage} alt={articleTitle} />
      <PageContent>
        {articleContent.content.map((content) =>
          documentToReactComponents(content)
        )}
      </PageContent>
    </PageWrapper>
  );
};

export default RoutePage;

const PageWrapper = styled.section`
  display: flex;
  gap: 16px;
  padding: 4vh 8vw;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    align-self: center;
  }
`;

const PageTite = styled.h3`
  background-color: #f6f6f6;
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #fe530a;
  letter-spacing: 1px;
`;

const PageContent = styled.div`
  p {
    margin: 10px 0;
  }
  h2 {
    margin: 16px 0;
  }
  ul {
    list-style: none;
    li {
      color: #fe530a;
      font-size: 18px;
      p {
        color: #000;
      }
    }
  }
`;
