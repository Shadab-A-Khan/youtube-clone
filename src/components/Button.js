import React from "react";

const Button = () => {
  return (
    <div className="bg-yellow-500 w-[100%] h-[10%] py-6 pl-1">
      <button className="px-3 py-1 m-1 bg-slate-200 hover:bg-slate-300  rounded-lg font-semibold font-sans">
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

export default Button;
