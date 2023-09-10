$(document).ready(function () {
  // Initialize DataTable with options
  var table = $("#dataTable").DataTable({
    paging: true, // Enable pagination
    searching: true, // Enable search/filtering
    ordering: true, // Enable sorting
    info: false, // Disable showing information
    lengthChange: false, // Disable changing number of rows per page
    pageLength: 5, // Set the number of rows per page
    pagingType: "numbers", // Display only numeric page buttons
  });
});
