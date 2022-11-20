import styled from "styled-components";
import useContentful from "../../useContentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ImageCards = () => {
  const { getPDFs } = useContentful();
  const [pdfs, setPDFs] = useState([]);
  useEffect(() => {
    getPDFs().then((response) => response && setPDFs(response[0]));
  }, []);
  console.log(pdfs);
  return (
    <ImageCardsContainer>
      <ImageCardWrapper>
        <ImageCard
          src="https://emtemp.gcom.cloud/ngw/commonassets/images/build-graphics/corporate-homepage/promo-a-eureka2-resize.png"
          alt="image1"
        />
        <CardText>
          <h2>New Eureka! Episode: What Makes a Smart City?</h2>
          <NavLink to="/route-video">
            Watch Video <ion-icon name="videocam-outline"></ion-icon>
          </NavLink>
        </CardText>
      </ImageCardWrapper>
      <ImageCardWrapper>
        <ImageCard
          src="https://emtemp.gcom.cloud/ngw/commonassets/images/build-graphics/corporate-homepage/promo-b1-talent-champions-nov22.jpg"
          alt="image1"
        />
        <CardText>
          <h2>Wissen CEO Talent Champions</h2>
          <a href={pdfs.pdfFile} download={pdfs.pdfFile}>
            Download Lessons <ion-icon name="download-outline"></ion-icon>
          </a>
        </CardText>
      </ImageCardWrapper>
      <ImageCardWrapper>
        <ImageCard
          src="https://emtemp.gcom.cloud/ngw/commonassets/images/build-graphics/corporate-homepage/promo-b-talent-champions-oct22.jpg"
          alt="image1"
        />
        <CardText>
          <h2>Wissen Technology Expertise</h2>
          <NavLink to="/route-video">
            Learn More <ion-icon name="exit-outline"></ion-icon>
          </NavLink>
        </CardText>
      </ImageCardWrapper>
    </ImageCardsContainer>
  );
};

export default ImageCards;

const ImageCardsContainer = styled.div`
  padding: 0 48px;
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-around;
  margin-top: 2rem;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 2rem;
  left: 1rem;
  color: #002856;

  transition: color 0.3s ease-out;
  h2:hover {
    color: blue;
  }
  ion-icon {
    font-size: 24px;
  }
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: none;
    font-size: 18px;
    &:hover,
    &:visited {
      text-decoration: underline;
      color: blue;
    }
  }
`;

const ImageCardWrapper = styled.div`
  position: relative;
`;

const ImageCard = styled.img`
  height: 420px;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 16px rgb(0, 0, 0, 0.5);
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 18px;

  &:hover,
  &:visited {
    text-decoration: underline;
    color: blue;
  }
`;
