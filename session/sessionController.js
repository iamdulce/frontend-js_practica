import {
    noAuthenticatedView,
    authenticatedSessionView,
} from "./sessionView.js";

export const sessionController = nav => {
    if (isUserLoggedIn()) {
        nav.innerHTML = authenticatedSessionView();
        const logoutButton = nav.querySelector("#btn-logout");
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("token");
            sessionController(nav);
            window.location = "./index.html";
        });
    } else {
        nav.innerHTML = noAuthenticatedView();
    }
};

const isUserLoggedIn = () => {
    return localStorage.getItem("token");
};
