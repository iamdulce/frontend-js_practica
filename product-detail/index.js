import { loaderController } from "../loader/loaderController.js";
import { sessionController } from "../session/sessionController.js";
import { productDetailController } from "./productDetailController.js";

const loader = document.getElementById("loader");
const { showLoader, hideLoader } = loaderController(loader);

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const productDetail = document.getElementById("product-detail");

    productDetail.addEventListener("startLoadingProductDetail", () => {
        showLoader();
    });
    productDetail.addEventListener("finishLoadingProductDetail", () => {
        hideLoader();
    });
    productDetailController(productDetail, productId);

    const session = document.getElementById("session");
    sessionController(session);
});
