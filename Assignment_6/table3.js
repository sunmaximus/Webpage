
/*--
  File:/~snguyen/Assignment_6/table3.js
  91.461 Assignment: Creating an Interactive Dynamic Table
  Son N. Nguyen, UMass Lowell Computer Science, snguyen@cs.uml.edu
  Copyright (c) 2014 by Son N. Nguyen. All rights reserved. May be freely 
  copied or excerpted for educational purposes with credit to the author.
  updated by SNN on October 26, 2014 at 11:59 PM.
--*/

//sourcecode is credited to Gregory Caldwell. I got help from him.
function create_Table() {
    // using remove to refresh
    var remove_Table = document.getElementById("aTable");
    
	if (remove_Table != null)
        remove_Table.remove();

    // getting the four values
    // putting a "+" to make treat it as a number instead of string
    var colStartVal = +document.getElementById("colStartVal").value;
    var colEndVal = +document.getElementById("colEndVal").value;
    var rowStartVal = +document.getElementById("rowStartVal").value;
    var rowEndVal = +document.getElementById("rowEndVal").value;

    error_checking(colStartVal, colEndVal, rowStartVal, rowEndVal);
    output(colStartVal, colEndVal, rowStartVal, rowEndVal);
}


function error_checking(colStartVal, colEndVal, rowStartVal, rowEndVal) {
    //begin error checking using boolean 0 and 1
    var flag = 0;
    if (colStartVal < -100 || colStartVal > 100) {
        $("#err1").html("Please enter an integer between -100 to 100.");
        flag = 1;
    }
    if (colEndVal < -100 || colEndVal > 100) {
        $("#err2").html("Please enter an integer between -100 to 100.");
        flag = 1;
    }
    if (colStartVal < -100 || colStartVal > 100) {
        $("#err3").html("Please enter an integer between -100 to 100.");
        flag = 1;
    }
    if (colEndVal < -100 || colEndVal > 100) {
        $("#err4").html("Please enter an integer between -100 to 100.");
        flag = 1;
    }

    /*Checking if the input is an integer. */
    if (!$.isNumeric(colStartVal)) {
        $("#err1").html("Please enter an integer.");
        flag = 1;
    }
    if (!$.isNumeric(colEndVal)) {
        $("#err2").html("Please enter an integer.");
        flag = 1;
    }
    if (!$.isNumeric(colStartVal)) {
        $("#err3").html("Please enter an integer.");
        flag = 1;
    }
    if (!$.isNumeric(colEndVal)) {
        $("#err4").html("Please enter an integer.");
        flag = 1;
    }

    /*If any of the validation failed, the table will not be generated. */
    if (flag == 1) {
        return false;
    }
    //end of Error Checking
}

function output(colStartVal, colEndVal, rowStartVal, rowEndVal) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = colStartVal, ii = colEndVal + 1; i <= ii; ++i) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = rowStartVal, jj = rowEndVal + 1; j <= jj; ++j) {
            // creates a cell
            var cell = document.createElement("td");
            var cellText;
            // give some style to the cell/table
            var cellStyle = "padding: 10px; ";
            if (i == colStartVal && j == rowStartVal) {
                cellText = document.createTextNode("");
                cell.setAttribute("style", cellStyle + "background-color: #069");
            } else if (i == colStartVal) {
                cellText = document.createTextNode(j - 1);
                cell.setAttribute("style", cellStyle + "background-color: #069");
            } else if (j == rowStartVal) {
                cellText = document.createTextNode(i - 1);
                cell.setAttribute("style", cellStyle + "background-color: #069");
            } else {
                cellText = document.createTextNode((i - 1) * (j - 1));
                cell.setAttribute("style", cellStyle + "background-color: #8181F7");
            }

            // add the text to cell
            cell.appendChild(cellText);
            // add the cell to row
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // setting an id for tbl
    tbl.setAttribute("id", "aTable");
}

