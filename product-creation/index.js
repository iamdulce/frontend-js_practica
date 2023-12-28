import { loaderController } from "../loader/loaderController.js";
import { sessionController } from "../session/sessionController.js";
import { productCreationController } from "./productCreationController.js";

const loader = document.getElementById("loader");
const { showLoader, hideLoader } = loaderController(loader);

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location = "./index.html";
    }

    const productCreation = document.getElementById("product-creation");

    productCreation.addEventListener("startProductCreation", () => {
        showLoader();
    });
    productCreation.addEventListener("finishProductCreation", () => {
        hideLoader();
    });

    productCreationController(productCreation);

    const session = document.getElementById("session");
    sessionController(session);
});
