// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("body");

// function creation
function buildTable(data) {
    // first, clear out an existing data
    tbody.html("");

    //next, loop thropugh each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // cheak to see if a date was entered and filter the 
    // data using that date.
    if (date) {
        //apply 'filter' to the table dta to only keep the
        //rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild the table using the filtered data
    // @note: if no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);