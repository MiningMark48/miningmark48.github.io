function tableSearch() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("tableSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function countEntries() {
    console.log("Counting entries...");
    var rows = document.getElementById("myTable").getElementsByTagName("tr").length - 1;
    console.log("There are " + rows + " entries in the table.");
    document.getElementById("cmdAmt").textContent = rows;
    document.getElementById("tableSearch").placeholder = document.getElementById("tableSearch").placeholder + " (" + rows + ")" ;
}