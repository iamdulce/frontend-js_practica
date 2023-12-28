import { loginController } from "./loginController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById("loader");
const { showLoader, hideLoader } = loaderController(loader);

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("startLogin", () => {
        showLoader();
    });
    loginForm.addEventListener("finishLogin", () => {
        hideLoader();
    });

    loginController(loginForm);
});
