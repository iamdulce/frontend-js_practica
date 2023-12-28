import { dispatchCustomEvent } from "../utils/customEvent.js";
import { createProduct } from "./productCreationModel.js";

export const productCreationController = productCreationForm => {
    productCreationForm.addEventListener("submit", async event => {
        event.preventDefault();

        const formData = new FormData(productCreationForm);
        const productName = formData.get("productName");
        const productDescription = formData.get("productDescription");
        const productPrice = formData.get("productPrice");
        const productImage = formData.get("productImage");
        const productStatus = formData.get("productStatus");

        try {
            dispatchCustomEvent("startProductCreation", productCreationForm);
            await createProduct(
                productName,
                productDescription,
                productPrice,
                productImage,
                productStatus
            );
            alert("Product created sucessfully!");
            window.location = "./index.html";
        } catch (error) {
            alert(error);
        } finally {
            dispatchCustomEvent("finishProductCreation", productCreationForm);
        }
    });
};
