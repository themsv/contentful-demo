import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../services/cms";

const Article = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((response) => response && setArticles(response));
  }, []);
  return (
    <ArticleWrapper>
      <ArticleContainer>
        {articles.map((article) => (
          <ArticleCard key={article.articleTitle}>
            <img src={article.articleImage} alt={article.articleTitle} />
            <h4>{article.articleTitle}</h4>
            <p>{article.articleSummary}</p>
            <NavLink to="/routed" state={{ article }}>
              Read More..
            </NavLink>
          </ArticleCard>
        ))}
      </ArticleContainer>
    </ArticleWrapper>
  );
};

export default Article;

const ArticleWrapper = styled.section`
  margin: 1vh 1vw;
  color: #555;

  h2 {
    letter-spacing: 6px;
    font-weight: 400;
  }
`;

const ArticleContainer = styled.div`
  margin: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

const ArticleCard = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  gap: 14px;
  max-width: 380px;
  transition: all 0.4s;

  img {
    max-width: 400px;
    height: 200px;
  }
  h4 {
    color: #000;
  }

  p {
    font-weight: 300;
    color: #868e96;
    font-size: 14px;
    letter-spacing: 1.2px;
  }

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgb(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fe530a;
  padding: 8px 16px;
  outline: none;
  border: none;
  align-self: flex-start;

  &:hover {
    background-color: #fe530a;
    color: white;
  }
`;
