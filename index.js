import { loaderController } from "./loader/loaderController.js";
import { productsListController } from "./products-list/productsListController.js";
import { sessionController } from "./session/sessionController.js";

const loader = document.getElementById("loader");
const { showLoader, hideLoader } = loaderController(loader);

document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.getElementById("products-list");

    productsList.addEventListener("startLoadingProducts", () => {
        showLoader();
    });
    productsList.addEventListener("finishLoadingProducts", () => {
        hideLoader();
    });
    productsListController(productsList);

    const session = document.getElementById("session");
    sessionController(session);
});
