import React, { useState } from "react";
import {
  NumberInput,
  Select,
  Table,
  TableColumn
} from "@royalnavy/react-component-library";
import {
  foodSections,
  months,
  foodData,
  forecastListData,
  forecastTitleLookUp
} from "./dummyData";
import ForecastTableList from "./ForecastTableList";

const ReviewOrders = () => {
  const [timelineCount, setTimelineCount] = useState(1);
  const [selectedFoodSection, setSelectedFoodSection] = useState("");
  const [selectedFoodItem, setSelectedFoodItem] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [forecastDataList, setForecastDataList] = useState(forecastListData);

  const onTimelineChange = (event) => {
    debugger;
    const val = event.target.value;
    let tempData;
    // const title =
    if (val > forecastDataList.length) {
      //increment
      tempData = [
        ...forecastDataList,
        { title: forecastTitleLookUp(Number(val)), data: foodData }
      ];
    } else {
      // decrement
      forecastDataList.pop();
      tempData = [...forecastDataList];
    }

    setForecastDataList(tempData);

    setTimelineCount(val);
  };

  const handleFoodItemSelection = (event) => {
    setSelectedFoodItem(event.target.value);
  };
  const handleFoodSectionSelection = (event) => {
    for (const foodSection of foodSections) {
      if (foodSection.label === event.target.value) {
        setFoodItems(foodSection.items);
        setSelectedFoodItem("");
      }
    }
    setSelectedFoodSection(event.target.value);
  };

  return (
    <>
      <div className="homeBoxStyle">
        <p>HOME</p>
      </div>
      <div className="mainControlsStyle">
        <div className="measurementDiv">
          <Select
            label="Food Section"
            options={foodSections}
            onChange={handleFoodSectionSelection}
            value={selectedFoodSection}
          />
        </div>
        <div className="itemsDiv">
          <Select
            label="Food Item"
            options={foodItems}
            value={selectedFoodItem}
            onChange={handleFoodItemSelection}
          />
        </div>

        <div className="marginMinus10">
          <NumberInput
            name="Timeline"
            label="Timeline"
            step={1}
            max={5}
            min={1}
            value={timelineCount}
            onChange={onTimelineChange}
          />
        </div>
      </div>

      <div className="pageInfo">
        <h3 className="h3Title">Forcasting for {selectedFoodItem}</h3>
        <h1 className="h1Title">
          Forecasting orders for Sainsbury's in coming financial years
        </h1>
        <h6 className="h6Title">
          These forcast data is autogenerated by AI tool. It helps in planing
          and ordering data for your store
        </h6>
      </div>

      <div class="rn-container" className="mainContent">
        <div className="monthsDiv">
          <Table data={months}>
            <TableColumn field="first">Months</TableColumn>
          </Table>
        </div>

        <ForecastTableList forecastData={forecastDataList} />
      </div>
    </>
  );
};

export default ReviewOrders;
