import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useHref } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (searchCache[searchQuery]) {
  //       setSuggestions(searchCache[searchQuery]);
  //     } else {
  //       getSearchSugsestions();
  //     }
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        // getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  // const getSearchSugsestions = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json = await data.json();
  //   //console.log(json[1]);
  //   setSuggestions(json[1]);

  //   // update cache
  //   dispatch(
  //     cacheResults({
  //       [searchQuery]: json[1],
  //     })
  //   );
  // };

  const getSearchSugsestions = async () => {
    await fetch(SEARCH_API + searchQuery)
      .then((data) => data.json())
      .then((response) => {
        setSuggestions(response[1]);
        console.log(response);
        dispatch(
          cacheResults({
            [searchQuery]: response[1],
          })
        );
      });
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex py-2">
      <div className="w-4/12 flex mx-2 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-[9%] p-3 rounded-full"
          alt=" hamburger"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        ></img>

        <img
          className="w-[19%] rounded-xl"
          alt=" youtube logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        ></img>
      </div>
      <div className="w-4/12 p-[0.3rem] py-[0.5rem] flex">
        <input
          className="w-[70%] my-[0.04rem] mr-0 px-[0.3rem] rounded-l-3xl shadow-[0_0_1.5px_#adadad]  shadow-black"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>
        <button className="w-[15%] hover:bg-slate-200 bg-gray-100 mx-[0.08rem] -ml-1 rounded-r-3xl scale-95 shadow-[0_0_1.5px_#adadad]  shadow-black">
          <img
            alt="scope"
            className="w-[30%] mx-[35%] cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png"
          ></img>
        </button>

        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] mt-12 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((s) => (
                <li key={s} className="py-2 px-3  shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <img
          alt="mic"
          className="w-[7%] p-2 rounded-full bg-slate-100 hover:bg-slate-300 ml-[2%]"
          src="https://icons.veryicon.com/png/o/miscellaneous/colouring-icon/mic-19.png"
        ></img>
      </div>
      <div className="w-4/12 flex">
        <div className="ml-[75%]">
          <img
            className="w-[78%] mt-[0.8rem] hover:p-[0.2rem] rounded-full hover:bg-slate-200"
            alt="create"
            src="https://cdn.icon-icons.com/icons2/3237/PNG/512/social_media_chatting_tool_add_video_icon_197449.png"
          ></img>
        </div>
        <div className="">
          <img
            className="w-[78%] mt-[0.8rem] rounded-full hover:bg-slate-200 "
            alt="notification bell"
            src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png"
          ></img>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/shadab-khan-111469201/">
            <img
              className="w-[74%] mt-[0.8rem] mr-[2rem] hover:p-[0.2rem] rounded-full hover:bg-slate-200"
              alt="Profile"
              src="https://avatars.githubusercontent.com/u/78543910?v=4"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
