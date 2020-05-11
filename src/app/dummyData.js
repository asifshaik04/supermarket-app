import React from "react";

const foodSections = [
  {
    label: "Fruits",
    value: "Fruits",
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" }
    ]
  },
  {
    label: "Vegetables",
    value: "Vegetables",
    items: [
      { label: "Tomato", value: "Tomato" },
      { label: "Onion", value: "Onion" }
    ]
  },
  {
    label: "Bakery",
    value: "Bakery",
    items: [
      { label: "Cakes", value: "Cakes" },
      { label: "Bread", value: "Bread" },
      { label: "Naan", value: "Naan" }
    ]
  },
  { label: "Dairy", value: "Dairy", items: [] },
  { label: "Frozen", value: "Frozen", items: [] }
];

const months = [
  {
    id: "a",
    first: <p className="monthsData">Jan</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Feb</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Mar</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Apr</p>
  },
  {
    id: "b",
    first: <p className="monthsData">May</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Jun</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Jul</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Aug</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Sep</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Oct</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Nov</p>
  },
  {
    id: "b",
    first: <p className="monthsData">Dec</p>
  }
];

const foodData = [
  {
    id: "a",
    first: "91 Tons",
    second: "88 Tons",
    third: <p className="foodDataWarning">-3 Tons -3%</p>
  },
  {
    id: "b",
    first: "55 Tons",
    second: "55 Tons",
    third: <p className="foodDataSafe">0 Tons 0%</p>
  },
  {
    id: "d",
    first: "80 Tons",
    second: "75 Tons",
    third: <p className="foodDataDanger">-5 Tons 2%</p>
  },
  {
    id: "c",
    first: "110 Tons",
    second: "115 Tons",
    third: <p className="foodDataSafe">+5 Tons 2%</p>
  },
  {
    id: "e",
    first: "35 Tons",
    second: "20 Tons",
    third: <p className="foodDataDanger">-5 Tons 1%</p>
  },
  {
    id: "f",
    first: "65 Tons",
    second: "120 Tons",
    third: <p className="foodDataWanted">+55 Tons 20%</p>
  },
  {
    id: "g",
    first: "10 Tons",
    second: "10 Tons",
    third: <p className="foodDataSafe">0 Tons 0%</p>
  },
  {
    id: "h",
    first: "10 Tons",
    second: "40 Tons",
    third: <p className="foodDataWanted">+30 Tons 60%</p>
  },
  {
    id: "i",
    first: "19 Tons",
    second: "21 Tons",
    third: <p className="foodDataWarning">-3 Tons -3%</p>
  },
  {
    id: "j",
    first: "15 Tons",
    second: "20 Tons",
    third: <p className="foodDataDanger">-5 Tons 1%</p>
  },
  {
    id: "k",
    first: "30 Tons",
    second: "30 Tons",
    third: <p className="foodDataSafe">0 Tons 0%</p>
  },
  {
    id: "l",
    first: "40 Tons",
    second: "40 Tons",
    third: <p className="foodDataSafe">0 Tons 0%</p>
  }
];

const forecastListData = [{ title: "FY 21/22", data: foodData }];

const forecastTitleLookUp = (timeLineNumber) => {
  debugger;
  let title = "FY 21/22";
  switch (timeLineNumber) {
    case 1:
      title = "FY 21/22";
      break;
    case 2:
      title = "FY 22/23";
      break;
    case 3:
      title = "FY 23/24";
      break;
    case 4:
      title = "FY 24/25";
      break;
    case 5:
      title = "FY 25/26";
      break;
  }
  return title;
};

export {
  foodSections,
  months,
  foodData,
  forecastListData,
  forecastTitleLookUp
};
