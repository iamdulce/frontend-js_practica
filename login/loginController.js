import { dispatchCustomEvent } from "../utils/customEvent.js";
import { loginUser } from "./loginModel.js";

export const loginController = loginForm => {
    loginForm.addEventListener("submit", async event => {
        event.preventDefault();

        try {
            dispatchCustomEvent("startLogin", loginForm);
            const { email, password } = getLoginData(loginForm);

            const token = await loginUser(email, password);
            alert("User logged in");
            localStorage.setItem("token", token);
            window.location = "./index.html";
        } catch (error) {
            alert(error);
        } finally {
            dispatchCustomEvent("finishLogin", loginForm);
        }
    });
};

const getLoginData = loginForm => {
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    return {
        email: email,
        password: password,
    };
};
