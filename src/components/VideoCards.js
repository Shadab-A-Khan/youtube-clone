import React from "react";

const VideoCards = ({ info }) => {
  const { title, channelTitle, thumbnails, publishedAt } = info?.snippet;
  const { viewCount } = info?.statistics;
  return (
    <div className="p-2 m-2 w-72">
      <div className="p-1 m-1">
        <img
          className="rounded-lg hover:transition-rouned-none"
          src={thumbnails.high.url}
          alt="poster"
        ></img>
        <ul className="pb-2">
          <li className="font-semibold">{title}</li>
          <li>{channelTitle}</li>
        </ul>
        <div className="flex text-xs">
          <div>{viewCount}</div>
          <div>{publishedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
