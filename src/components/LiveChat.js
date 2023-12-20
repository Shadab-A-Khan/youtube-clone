import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState(" ");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[300px] ml-2 p-2 border border-gray bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessage.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 mb-4 border-slate-500"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: " Shadab Khan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-[80%] p-2 bg-slate-600 rounded-l-lg text-white"
          type="text"
          placeholder="Enter your comment"
        ></input>
        <button className="w-[20%] text-white p-2  bg-red-500  rounded-r-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
