// Homepage Map java
if (document.querySelector("#map")) {
  const map = L.map("map").setView([29.3440892486483, 47.949007143370196], 13);

  L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);

  L.marker([29.3440892486483, 47.949007143370196])
    .addTo(map)
    .bindPopup("مركز كونا لتطوير القدرات الإعلامية")
    .openPopup();
}
document.querySelector(".burger-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.add("open");
});
document.querySelector(".exit-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
});
