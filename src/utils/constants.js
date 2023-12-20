const GOOGLE_API_KEY = "AIzaSyABpt5LNmTU9odAQIEi8oafiWZTuuZMS_g";

export const OFFSET_LIVE_CHAT = 15;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const RECOMMENDED_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=in&regionCode=ES&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API ="http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

// export const COMMENTS_API ="https://youtube.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"AdHLDvPH8BU";

