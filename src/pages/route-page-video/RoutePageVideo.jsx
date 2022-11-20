import styled from "styled-components";
import useContentful from "../../useContentful";
import { useEffect, useState } from "react";

const RoutePageVideo = () => {
  const { getVideos } = useContentful();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos().then((response) => response && setVideos(response));
  }, []);

  console.log(videos);
  return (
    <RouteVideoContainer>
      <PageTite>
        How This Smart City Is Reducing Crime, Traffic and Pollution
      </PageTite>
      <p>
        Coral Gables, FL, is a coastal city home to the University of Miami, 140
        multinational corporations and nearly 50,000 residents. When
        <strong> Raimundo Rodulfo</strong>, Director of Innovation &amp;
        Technology and Chief Innovation Officer for the city, joined the public
        sector, he knew data and technology would help improve citizens lives.
      </p>
      <p>
        Raimundo explains how a Smart City is based on transparency, open data
        and insights that relies heavily on all sectors working together. Using
        quick wins, like reducing crime 40% in two years, Raimundo was able to
        get officials from all aspects of the city to see how implementing Smart
        City architecture helped reduce crime, traffic and pollution.
      </p>
      <VideoContainer>
        {videos.map((video) => (
          <iframe
            width="620"
            height="400"
            src={video.videoMedia}
            title={video.videoTitle}
          ></iframe>
        ))}
      </VideoContainer>
    </RouteVideoContainer>
  );
};

export default RoutePageVideo;

const RouteVideoContainer = styled.section`
  display: flex;
  gap: 16px;
  padding: 4vh 8vw;
  flex-direction: column;
`;

const PageTite = styled.h3`
  background-color: #f6f6f6;
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #fe530a;
`;

const VideoContainer = styled.div`
  display: flex;
  padding: 48px;
  gap: 48px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
