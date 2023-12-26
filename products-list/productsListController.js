import { getProducts } from "./productsListModel.js";
import { buildProducts, emptyProducts } from "./productsListView.js";
import {
    dispatchCustomEvent,
    createCustomEvent,
} from "../utils/customEvent.js";

export const productsListController = async productsList => {
    productsList.innerHTML = "";
    let products = [];
    try {
        dispatchCustomEvent("startLoadingProducts", productsList);
        products = await getProducts();
    } catch (error) {
        alert(error);
        const event = createCustomEvent("error");
        productsList.dispatchCustomEvent(event);
    } finally {
        dispatchCustomEvent("finishLoadingProducts", productsList);
    }

    if (products.length === 0) {
        productsList.innerHTML = emptyProducts();
    } else {
        renderProducts(products, productsList);
    }
};

const renderProducts = (products, productsList) => {
    products.forEach(product => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");
        productContainer.innerHTML = buildProducts(product);
        productsList.appendChild(productContainer);
    });
};
