// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// function to create the table
function createTable(ufodata) {
  let row = tbody.append("tr");

  // add each to the table:
  Object.entries(ufodata).forEach(([key, value]) =>{
    let cell = row.append("td")
    cell.text(value);
  });
}

// creates the initial table:
data.forEach(createTable);

let filter = d3.select("#filter-btn");

// filter table based on datetime input
function filterFun() {
  let filteredData = data.slice();
  let props = ["datetime", "city", "state", "country", "shape"];

  props.forEach((prop) => {
    const value = d3.select(`#${prop}`).property("value");
    if (value.length > 0) {
      filteredData = filteredData.filter(row => row[prop] === value);
    }
  });

  tbody.html('');
  filteredData.forEach(createTable);
}

filter.on("click", filterFun);
