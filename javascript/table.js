var dataTable;

$(document).ready(function () {
  // Initialize DataTable
  loadDataTable();

  // Add filtering
  $("#searchInput").on("keyup", function () {
    dataTable.search(this.value).draw();
  });
});

function loadDataTable() {
  dataTable = $("#dataTable1").DataTable({
    ajax: {
      url: "/Admin/Programs/getAll",
      type: "GET",
      dataType: "json",
      dataSrc: "", // Data source is an empty string since we're providing data directly
    },
    columns: [
      { data: "اسم الدوره" },
      { data: "بدايه الدوره" },
      { data: "نهايه الدوره" },
      { data: "سعر الدوره" },
      { data: "الاختيارات" },
    ],
    paging: true, // Enable pagination
    pageLength: 5, // Set default page length to 5
    info: false,
    lengthChange: false,
    pagingType: "numbers",
  });
}

// Mock server response (replace this with your actual server response)
$.mockjax({
  url: "/Admin/Programs/getAll",
  responseText: [
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
      ><img src="imgs/eye.svg" alt=""
    /></a>

    <a href="Training-modification.html"
      ><img src="imgs/edit.svg" alt=""
    /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
    {
      "اسم الدوره": "Program 1",
      "بدايه الدوره": "2023-09-25",
      "نهايه الدوره": "2023-09-30",
      "سعر الدوره": "2023-09-30",
      الاختيارات: `<a href="admin-courses.html"
        ><img src="imgs/eye.svg" alt=""
      /></a>
  
      <a href="Training-modification.html"
        ><img src="imgs/edit.svg" alt=""
      /></a>`,
    },
  ],
});
