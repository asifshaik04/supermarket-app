import React from "react";
import ForecastTable from "./ForecastTable";

const ForecastTableList = ({ forecastData }) => {
  return (
    <>
      {forecastData.map((forecastDataItem) => (
        <ForecastTable
          title={forecastDataItem.title}
          data={forecastDataItem.data}
        />
      ))}
    </>
  );
};

export default ForecastTableList;
