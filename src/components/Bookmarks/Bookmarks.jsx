import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mt-8">
      <h2 className="text-xl font-bold">Reading Time: {readingTime}</h2>
      <h1 className=" text-2xl font-bold">
        Bookmarked Blog: {bookmarks.length} <span className="pl-10">{}</span>
      </h1>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
