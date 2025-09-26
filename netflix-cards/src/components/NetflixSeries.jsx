import seriesData from "../api/seriesData";
import { SeriesCard } from "./SeriesCard";

//creating a card component
export const NetflixSeries = () => {
  return (
    <div className="container grid grid-two-columns">
      {seriesData.map((series) => (
        <SeriesCard key={series.id} series={series} />
      ))}
    </div>
  );
};
