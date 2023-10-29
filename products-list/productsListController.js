import { getProducts } from "./productsListModel.js";
import { buildProducts, emptyProducts } from "./productsListView.js";

export const productsListController = async productsList => {
    productsList.innerHTML = "";
    let products = [];
    try {
        products = await getProducts();
        if (products.length === 0) {
            productsList.innerHTML = emptyProducts();
        } else {
            renderProducts(products, productsList);
        }
    } catch (error) {
        throw error;
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
