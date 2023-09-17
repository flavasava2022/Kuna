// JavaScript
$(document).ready(function () {
  // Initialize DataTable with class selector
  var tables = $(".dataTable").DataTable({
    paging: true,
    searching: true,
    ordering: true,
    info: false,
    lengthChange: false,
    pageLength: 5,
    pagingType: "numbers",
  });
});
