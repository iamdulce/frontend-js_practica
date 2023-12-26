import { renderLoader } from "./loaderView.js";

export const loaderController = loader => {
    const showLoader = () => {
        loader.innerHTML = renderLoader();
    };
    const hideLoader = () => {
        loader.innerHTML = "";
    };
    return {
        showLoader,
        hideLoader,
    };
};
