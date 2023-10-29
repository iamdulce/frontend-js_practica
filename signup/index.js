import { signupController } from "./signupController.js";

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signup");
    signupController(signupForm);
});
