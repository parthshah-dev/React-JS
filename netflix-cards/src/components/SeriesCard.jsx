export const SeriesCard = ({ series }) => {
  const { image, name, description, genre, url } = series;

  return (
    <>
      <div className="border border-[#333] rounded-lg max-w-[400px] overflow-hidden flex flex-col gap-8 m-auto">
        <div>
          <img
            src={image}
            alt={name}
            width="600px"
            height="300px"
            className="w-full min-h-[150px] rounded-t-lg object-cover"
          ></img>
        </div>
        <div className="p-4 flex-1">
          <h1 className="font-semibold text-lg">Name: {name}</h1>
          <p className="text-sm text-gray-700">Description: {description}</p>
          <p className="text-sm text-gray-600">Genre: {genre}</p>
          <a href={url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
};
