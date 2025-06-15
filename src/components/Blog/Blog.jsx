import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
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
          <h5>{reading_time} min read </h5>
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
      <button className="pt-3">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
