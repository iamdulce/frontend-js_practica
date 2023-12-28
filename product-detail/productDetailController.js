import { getProduct, deleteProduct } from "./productDetailModel.js";
import { buildProduct } from "./productDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { dispatchCustomEvent } from "../utils/customEvent.js";

export const productDetailController = async (productDetail, productId) => {
    try {
        dispatchCustomEvent("startLoadingProductDetail", productDetail);
        const product = await getProduct(productId);
        productDetail.innerHTML = buildProduct(product);
        handleDeleteProduct(product, productDetail);
        console.log(product); //Probando como traigo product
    } catch (error) {
        alert(error);
        window.location.href = "./index.html";
    } finally {
        dispatchCustomEvent("finishLoadingProductDetail", productDetail);
    }
};

const handleDeleteProduct = (product, productDetail) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
        const decodedUser = decodeToken(token);

        if (product.user.username === decodedUser.username) {
            addDeleteProductBtn(product, productDetail);
        }
    }
};

const addDeleteProductBtn = (product, productDetail) => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete product";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", async () => {
        if (confirm("Are you sure you want to delete the product?")) {
            const token = localStorage.getItem("token");
            await deleteProduct(product.id, token);
            window.location.href = "./index.html";
            alert("Product deleted succesfully");
        }
    });
    productDetail.appendChild(deleteButton);
};
