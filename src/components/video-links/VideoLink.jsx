import useContentful from "../../useContentful";
import { useEffect, useState } from "react";

import styled from "styled-components";

const VideoLink = () => {
  const [videos, setVideos] = useState([]);
  const [pdfs, setPDFs] = useState([]);
  const { getVideos, getPDFs } = useContentful();

  useEffect(() => {
    getVideos().then((response) => response && setVideos(response));
    getPDFs().then((response) => response && setPDFs(response));
  }, []);

  return (
    <>
      <VideoContainer>
        {videos.map((video) => (
          <iframe
            width="420"
            height="315"
            src={video.videoLink}
            title={video.videoTitle}
          ></iframe>
        ))}
      </VideoContainer>
      <PDFWrapper>
        {pdfs.map((pdf) => (
          <iframe
            width="900"
            height="500"
            src={pdf.pdfFile}
            title={pdf.pdfTitle}
          ></iframe>
        ))}
      </PDFWrapper>
    </>
  );
};

export default VideoLink;

const VideoContainer = styled.div`
  display: flex;
  padding: 48px;
  gap: 48px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #2bcdbc;
`;

const PDFWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
`;
