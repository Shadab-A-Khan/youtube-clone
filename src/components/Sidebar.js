import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-[14%]">
      <ul className="">
        <Link to={"/"}>
          <div className="flex my-3 ml-1 cursor-pointer">
            <img
              className="w-6 mr-1"
              src="https://static.thenounproject.com/png/1068488-200.png"
              alt="home"
            ></img>
            <li className=" hover:scale-95 hover:bg-black hover:text-white hover:font-semibold hover:px-1 hover:rounded-lg">
              Home
            </li>
          </div>
        </Link>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 mr-1"
            src="https://avatars.mds.yandex.net/i?id=7fe4e39e78a82eaa479ab1503124c055820fc6c3-9097502-images-thumbs&n=13"
            alt="Shorts"
          ></img>
          <li>Shorts</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-5 mr-1"
            src="https://static.thenounproject.com/png/4530414-200.png"
            alt="Subscriptions"
          ></img>
          <li>Subscriptions</li>
        </div>
      </ul>
      <hr class="w-48 h-[0.01rem] bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex my-1 cursor-pointer rounded-lg">
        <h1 className="font-bold mr-1">You</h1>
        <img
          className="w-3 mr-1"
          src="https://www.svgrepo.com/download/27797/right-arrow.svg"
          alt="You"
        ></img>
      </div>
      <ul>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-[0.12rem]"
            src="https://toppng.com//public/uploads/preview/28-collection-of-youtube-play-button-drawing-youtube-icon-transparent-white-11562933217zebvgsr7yw.png"
            alt="Your Videos"
          ></img>
          <li>Your Videos</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 mr-1"
            src="https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003_640.png"
            alt="Your Channel"
          ></img>
          <li>Your Channel</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-1"
            src="https://cdn.icon-icons.com/icons2/494/PNG/512/history_icon-icons.com_48288.png"
            alt="History"
          ></img>
          <li>History</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-1"
            src="https://cdn.iconscout.com/icon/free/png-256/free-down-arrow-1965050-1660443.png"
            alt="Show more"
          ></img>
          <li>Show more</li>
        </div>
      </ul>
      <hr class="w-48 h-[0.01rem] bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <h1 className="font-bold mb-2">Explore</h1>
      <ul>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-1"
            src="https://icon-library.com/images/trending-icon/trending-icon-15.jpg"
            alt="Trending"
          ></img>
          <li className="mt-[0.18rem]">Trending</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-[1.4rem]  mr-2"
            src="https://www.pinclipart.com/picdir/middle/84-842533_shopping-bag-clipart-black-and-white.png"
            alt="Shoping"
          ></img>
          <li>Shoping</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-1"
            src="https://cdn0.iconfinder.com/data/icons/social-media-entertainment-line/32/Apple_Music-512.png"
            alt="Music"
          ></img>
          <li>Music</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.25rem] mr-1"
            src="https://www.clipartmax.com/png/middle/70-703676_movie-moviemaker-film-cut-comments-movie-clip-icon-png.png"
            alt="Films"
          ></img>
          <li>Films</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 mr-1"
            src="https://img1.gratispng.com/20180712/qaw/kisspng-emoticon-brand-font-online-icon-5b47647ea94526.9833310815314054386933.jpg"
            alt="Live"
          ></img>
          <li>Live</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.11rem]  mr-1"
            src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png?f=webp"
            alt="Gaming"
          ></img>
          <li>Gaming</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.18rem] mr-1"
            src="https://w7.pngwing.com/pngs/382/935/png-transparent-youtube-twitch-streaming-media-discord-plug-in-background-black-angle-text-rectangle-thumbnail.png"
            alt="News"
          ></img>
          <li>News</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.25rem] mr-1"
            src="https://banner2.cleanpng.com/20190510/zkg/kisspng-clip-art-trophy-illustration-portable-network-grap-great-trophy-clipart-download-award-achievement-5cd62e29ab6096.284981381557540393702.jpg"
            alt="Sports"
          ></img>
          <li>Sports</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 mr-1"
            src="https://i.pinimg.com/474x/67/d1/9a/67d19ab8ce62d4b0671357b8aa35327d.jpg"
            alt="Learning"
          ></img>
          <li>Learning</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6  mr-[0.12rem]"
            src="https://img1.gratispng.com/20180712/qaw/kisspng-emoticon-brand-font-online-icon-5b47647ea94526.9833310815314054386933.jpg"
            alt="Live"
          ></img>
          <li>Live</li>
        </div>
        <div className="flex my-3 ml-1 cursor-pointer hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.11rem] mr-1"
            src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png?f=webp"
            alt="Gaming"
          ></img>
          <li>Gaming</li>
        </div>
      </ul>
      <hr class="w-48 pt-0 h-[0.01rem]  bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <h1 className="font-bold mb-2">More From YouTube</h1>
      <ul>
        <div className="flex my-3 ml-1 hover:bg-slate-200 rounded-lg">
          <img
            className="w-5 py-1 mr-1"
            src="https://clipart-library.com/images/kT8kABGyc.png"
            alt="Youtube Premium"
          ></img>
          <li>YouTube Premium</li>
        </div>
        <div className="flex my-3 ml-1 hover:bg-slate-200 rounded-lg">
          <img
            className="w-5 py-1 mr-1"
            src="https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_1280.png"
            alt="YouTube Studio"
          ></img>
          <li className="mt-[0.17rem]">YouTube Studio</li>
        </div>
        <div className="flex my-3 ml-1 hover:bg-slate-200 rounded-lg">
          <img
            className="w-6   mr-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png"
            alt="YouTube Music"
          ></img>
          <li>YouTube Music</li>
        </div>
        <div className="flex my-3 ml-1 hover:bg-slate-200 rounded-lg">
          <img
            className="w-6 p-[0.11rem]  mr-1"
            src="https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png"
            alt="YouTube Kids"
          ></img>
          <li>YouTube Kids</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
