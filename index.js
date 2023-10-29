import { productsListController } from "./products-list/productsListController.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.getElementById("products-list");
    productsListController(productsList);
});
