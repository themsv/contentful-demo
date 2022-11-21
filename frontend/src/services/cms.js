import axios from "axios";

export const getAllArticles = async () => {
  try {
    const entries = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cms/article`
    );

    const sanitizedEntries = await entries.data.items.map((item) => {
      return {
        articleTitle: item.fields.articleTitle,
        articleContent: item.fields.articleContent,
        articleImage: item.fields.articleImage.fields.file.url,
        articleSummary: item.fields.articleSummary,
      };
    });

    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching articles ${error}`);
  }
};

export const getAllCarousel = async () => {
  try {
    const entries = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cms/carousel`
    );

    const sanitizedEntries = await entries.data.items.map((item) => {
      return {
        textAlternative: item.fields.alternative,
        imageUrl: item.fields.image.fields.file.url,
        imageLink: item.fields.imageLink,
      };
    });
    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching carousel ${error}`);
  }
};

export const getPDFs = async () => {
  try {
    const entries = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cms/pdf`
    );
    const sanitizedEntries = entries.data.items.map((item) => {
      return {
        pdfTitle: item.fields.pdfTitle,
        pdfFile: item.fields.pdfFile.fields.file.url,
      };
    });

    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching PDF ${error}`);
  }
};

export const getVideos = async () => {
  try {
    const entries = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cms/video`
    );
    const sanitizedEntries = entries.data.items.map((item) => {
      return {
        videoTitle: item.fields.videoTitle,
        videoMedia: item.fields.videoMedia.fields.file.url,
      };
    });

    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching authors ${error}`);
  }
};
