import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";
// import Comments from "./Comments";
const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getVidoes();
    dispatch(closeMenu());
  }, []);

  const getVidoes = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex">
      <div className="mx-[5%] mr-[6%] my-2 w-[60%]">
        <iframe
          width="115%"
          height="650"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?&autoplay=1&mute=1"
          }
          className="rounded-xl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="my-3 w-[115%]">
          {videos?.map(
            (video) =>
              video.id === searchParams.get("v") && (
                <ul>
                  {console.log(video)}
                  <li className="font-bold text-lg py-1">
                    {video.snippet.title}
                  </li>
                  <div className="flex m-auto">
                    <div className="w-[55%] ">
                      <div className="flex">
                        <img
                          src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg"
                          className="w-12 mx-2 ml-0 mr-3 cursor-pointer hover:scale-95 rounded-full"
                          alt="channel-img"
                        ></img>
                        <div>
                          <li className="font-semibold text-blue-800">
                            {video.snippet.channelTitle}
                          </li>
                          <button className="bg-black hover:bg-slate-700 cursor-pointer rounded-2xl text-white font-semibold text-sm mx-1 py-1 px-2  hover:scale-95">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[40%] flex m-auto ">
                      <div className="flex bg-slate-100  py-2 rounded-l-2xl hover:scale-95">
                        <div className="mr-1 hover:scale-95">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfNA_2NqgGn-ta_xgaeTEgVxv-aYQsoGUsw&usqp=CAU"
                            alt="thums-up"
                            className="w-7 cursor-pointer "
                          ></img>
                        </div>
                        <div className="mt-1">
                          <li>
                            {Math.round(video.statistics.likeCount / 1000)}
                            <span className="font-semibold">k</span>
                          </li>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-2 pt-[0.6rem] rounded-r-2xl hover:scale-95">
                        <img
                          src="https://www.vhv.rs/dpng/d/614-6146923_marketing-dislike-thumbs-down-dislike-png-transparent-png.png"
                          alt="thumbs-down"
                          className="w-7 cursor-pointer "
                        ></img>
                      </div>
                      <div className="bg-gray-100 p-2 mx-2 rounded-2xl flex font-semibold hover:scale-95">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUm27J9_G_EMQaiDK-1544ghtM7-KSX9ZtxD09pHCxMbQhI66XmzDQix6YA6JqU1Pgic&usqp=CAU"
                          alt="share"
                          className="w-7 cursor-pointer "
                        ></img>
                        Share
                      </div>
                      <div className="bg-gray-100 p-2 px-2mx-2 rounded-2xl flex font-semibold hover:scale-95">
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/026/230/650/non_2x/download-button-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg"
                          alt="download"
                          className="w-7 mr-1 cursor-pointer "
                        ></img>
                        download
                      </div>
                      <div className="bg-gray-100 p-2 px-3 mx-2 rounded-2xl flex font-semibold hover:scale-95">
                        <img
                          src="https://icon-library.com/images/later-icon/later-icon-1.jpg"
                          alt="save"
                          className="w-7 mr-2 cursor-pointer "
                        ></img>
                        Save
                      </div>
                    </div>
                  </div>

                  <div className="p-3 pt-0 m-4 bg-gray-100 rounded-2xl">
                    <h1 className="py-1 font-semibold">
                      {Math.round(video.statistics.viewCount / 1000)}k views
                    </h1>
                    {video.snippet.description}
                  </div>
                  <div className=" p-2 m-2 mb-1 font-bold text-2xl">
                    Top Chats Live ⬇{" "}
                  </div>
                  <div>
                    <LiveChat />
                  </div>
                </ul>
              )
          )}
        </div>

        {/* <div>
          <Comments />
        </div> */}
      </div>
      <div className="w-[24%] flex flex-wrap ml-[5%] mt-[0.5%]  h-screen overflow-y-auto  rounded-lg  cursor-pointer">
        <div className="flex flex-wrap">
          <h1 className=" mb-2 font-sans font-bold text-lg">Watch Later</h1>
          {videos?.map((video) => (
            <Link to={"/watch?v=" + video.id}>
              <div className="flex my-2 hover:shadow-[0_0_5.5px_#adadad] hover:bg-gray-200">
                <div className="w-[45%]">
                  <img
                    className="rounded-lg w-[90%]"
                    src={video.snippet.thumbnails.high.url}
                    alt="poster"
                  ></img>
                </div>
                <div className=" w-[65%] hover:scale-95 mr-[15%]">
                  <ul>
                    <li className=" text-xs">{video.snippet.title}</li>
                    <li className="font-semibold pt-2">
                      {video.snippet.channelTitle}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
