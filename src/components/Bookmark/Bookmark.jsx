const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="mt-2 bg-gray-300 p-3">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default Bookmark;
