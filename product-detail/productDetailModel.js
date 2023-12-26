export const getProduct = async id => {
    const url = `http://localhost:8000/api/products/${id}`;
    let productData;

    try {
        const response = await fetch(url);
        if (response.ok) {
            productData = await response.json();
        } else {
            throw new Error("There was an error, please try again later");
        }
    } catch (error) {
        throw error.message;
    }

    return productData;
};
