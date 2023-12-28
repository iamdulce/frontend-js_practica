import { sessionController } from "../session/sessionController.js";
import { productCreationController } from "./productCreationController.js";

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location = "./index.html";
    }

    const session = document.getElementById("session");
    sessionController(session);

    const productCreation = document.getElementById("product-creation");
    productCreationController(productCreation);
});
