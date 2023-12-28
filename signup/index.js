import { signupController } from "./signupController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById("loader");
const { showLoader, hideLoader } = loaderController(loader);

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signup");

    signupForm.addEventListener("startSigup", () => {
        showLoader();
    });
    signupForm.addEventListener("finishSignup", () => {
        hideLoader();
    });

    signupController(signupForm);
});
