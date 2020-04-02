console.log("Hello")

// Setting up the margin of the graph

var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;

// Spacing for margins
var margin = 20;

// Spacing for words
var labelArea = 110;

// Spacing for the x and y axis
var tPadBot = 40;
var tPadLeft = 40;


// Setting up SVG Canvas
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");














// // SVG Creation
// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {top: 20, right: 175, bottom: 70, left: 45};

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// var svg = d3.select("#scatter")
//     .append("svg")
//       .attr("width", svgWidth)
//       .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Importing Data
// d3.csv("./assets/data/data.csv").then((healthData) => {

//     // Parse Data as numbers
//     healthData.forEach((data) => {
//         data.poverty = +data.poverty;
//         data.healthcare = +data.healthcare;
//     });

//     // Create scale functions
//     var xLinearScale = d3.scaleLinear()
//         .domain([8, d3.max(healthData, d => d.poverty)])
//         .range([0, width]);

//     var yLinearScale = d3.scaleLinear()
//         .domain([0, d3.max(healthData, d => d.healthcare)])
//         .range([height, 0]);

//     // Create axis functions
//     var bottomAxis = d3.axisBottom(xLinearScale);
//     var leftAxis = d3.axisLeft(yLinearScale);

//     // Append Axes to Chart
//     chartGroup.append("g")
//         .attr("transform", `translate(0, ${height})`)
//         .call(bottomAxis);

//     chartGroup.append("g")
//         .call(leftAxis);

//     // Create Circles
//     var circlesGroup = chartGroup.selectAll("circle")
//     .data(healthData)
//     .enter()
//     .append("circle")
//     .attr("cx", d => xLinearScale(d.poverty))
//     .attr("cy", d => yLinearScale(d.healthcare))
//     .attr("r", "15")
//     .attr("fill", "pink")
//     .attr("opacity", ".5");

//     // Create axes labels
//     chartGroup.append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 0 - margin.left +0)
//       .attr("x", 0 - (height / 2))
//       .attr("dy", "1em")
//       .attr("class", "axisText")
//       .text("Healthcare");

//     chartGroup.append("text")
//       .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
//       .attr("class", "axisText")
//       .text("Poverty");
//   }).catch(function(error) {
//     console.log(error);


//     // Tooltip tutorial from D3 scatterplot gallery
//     var toolTip = d3.select("#scatter")
//         .append("div")
//         .style("opacity", 0)
//         .attr("class", "tooltip")
//         .style("background-color", "white")
//         .style("border", "solid")
//         .style("border-width", "1px")
//         .style("border-radius", "5px")
//         .style("padding", "10px")

//     // // Call tooltip in chart
//     // chartGroup.call(toolTip);

//     // // Create event listeners to display and hide the tooltip
//     // circlesGroup.on("mouseover", function(healthData) {
//     //     toolTip.show(data, this);
//     //   })
//     //     // onmouseout event
//     //     .on("mouseout", function(healthData, index) {
//     //       toolTip.hide(data);
//     //     });
// });
