import React from "react";

const ButtonList = () => {
  return (
    <div className="w-[100%]  py-6 pl-1">
      {/* <Button /> */}
      <button className="px-3 py-1 m-1 bg-black text-white hover:bg-red-600 hover:text-white hover:font-bold hover:scale-90  rounded-lg font-semibold font-sans">
        All
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Mixes
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Music
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Lecture
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Live
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Recent uploads
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        Watched
      </button>
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold font-sans">
        New to You
      </button>
    </div>
  );
};

export default ButtonList;
