// script.js

// Search functionality
document.getElementById("search").addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
    const rows = document.querySelectorAll("#laptop-table tbody tr");

    rows.forEach(row => {
        const brand = row.cells[0].innerText.toLowerCase();
        const model = row.cells[1].innerText.toLowerCase();

        if (brand.includes(query) || model.includes(query)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

// Price filter functionality
document.getElementById("filter-btn").addEventListener("click", function () {
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    const rows = document.querySelectorAll("#laptop-table tbody tr");

    rows.forEach(row => {
        const price = parseFloat(row.cells[2].innerText);

        if (price >= minPrice && price <= maxPrice) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
