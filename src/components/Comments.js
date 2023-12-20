import React from "react";

const commentsData = [
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Shadab Khan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Shadab Khan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Shadab Khan",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Shadab Khan",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Shadab Khan",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Shadab Khan",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Shadab Khan",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shadab Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="m-5 p-2 ">
      <div className="flex ">
        <div className="flex">
          <h1 className="text-2xl font-bold"> 13 Comments </h1>
          <img
            src="https://static.thenounproject.com/png/310602-200.png"
            alt="sortby"
            className="w-11 ml-4 p-3 cursor-pointer hover:scale-95"
          ></img>
        </div>
        <div className="pt-2 font-semibold text-gray-500">sort by</div>
      </div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;
