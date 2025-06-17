import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handlereadingTime = (time, id) => {
    setreadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      <main className="md:flex bg-gray-100 max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handlereadingTime={handlereadingTime}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  );
}

export default App;
