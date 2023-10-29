import { productsListController } from "./products-list/productsListController.js";
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.getElementById("products-list");
    productsListController(productsList);

    const session = document.getElementById("session");
    sessionController(session);
});
