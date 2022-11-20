import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ug3e191wtmcr",
    accessToken: "PoLYfSsbHooSSeEDZgm6mDQIY-XSz4iEj56hXXvThi0",
    host: "preview.contentful.com",
  });

  const getCarouselImages = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "carousel",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          textAlternative: item.fields.alternative,
          imageUrl: item.fields.image.fields.file.url,
          imageLink: item.fields.imageLink,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  const getArticles = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "article",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          articleTitle: item.fields.articleTitle,
          articleContent: item.fields.articleContent,
          articleImage: item.fields.articleImage.fields.file.url,
          articleSummary: item.fields.articleSummary,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  const getVideos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "video",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
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

  const getPDFs = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "pdf",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          pdfTitle: item.fields.pdfTitle,
          pdfFile: item.fields.pdfFile.fields.file.url,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };
  return { getCarouselImages, getArticles, getVideos, getPDFs };
};

export default useContentful;
