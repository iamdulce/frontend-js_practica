import { getProduct } from "./productDetailModel.js";
import { buildProduct } from "./productDetailView.js";
// import { decodeToken } from "../utils/decodeToken";
import { dispatchCustomEvent } from "../utils/customEvent.js";

export const productDetailController = async (productDetail, productId) => {
    try {
        dispatchCustomEvent("startLoadingProductDetail", productDetail);
        const product = await getProduct(productId);
        productDetail.innerHTML = buildProduct(product);
        console.log(product); //Probando como traigo product
    } catch (error) {
        alert(error);
        window.location.href = "./index.html";
    } finally {
        dispatchCustomEvent("finishLoadingProductDetail", productDetail);
    }
};
