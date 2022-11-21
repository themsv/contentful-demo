import { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { getAllCarousel } from "../../services/cms";

const CarouselComp = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getAllCarousel().then((response) => response && setCarousel(response));
  }, []);

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
      >
        {carousel.map((eachItem) => (
          <div
            className="carousel-image-wrapper"
            key={eachItem.textAlternative}
          >
            <img
              src={eachItem.imageUrl}
              alt={eachItem.textAlternative}
              height="460"
            />
            <a href={eachItem.imageLink} className="carousel-image-button">
              Read More
            </a>
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselComp;

const CarouselContainer = styled.section`
  margin: 1vh auto;
  padding: 1rem;
`;
