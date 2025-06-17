import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handlereadingTime }) => {
  const {
    id,
    title,
    cover,
    author_img,
    posted_date,
    author,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="px-4 mb-12 bg-white">
      <img src={cover} className="rounded-lg w-full" alt="" />

      <div className="flex justify-between py-2">
        <div className="flex gap-3.5 items-center ">
          <img src={author_img} width="80px" alt="" />
          <div>
            <h3>{author}</h3>
            <h6>{posted_date}</h6>
          </div>
        </div>

        <div>
          <span>
            {reading_time} min read{" "}
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="cursor-pointer"
            >
              <CiBookmark className="inline" />
            </button>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">{title}</h2>

        {hashtags.map((hash, idx) => (
          <span key={idx} className="pr-3">
            #{hash}
          </span>
        ))}
      </div>
      <button
        onClick={() => handlereadingTime(reading_time, id)}
        className="pt-3 text-blue-700 font-semibold cursor-pointer"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
