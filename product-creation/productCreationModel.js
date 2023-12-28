export const createProduct = async (
    productName,
    productDescription,
    productPrice,
    productImage,
    productStatus
) => {
    const url = "http://localhost:8000/api/products";
    const token = localStorage.getItem("token");

    const body = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        status: productStatus,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    let response;
    try {
        response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        // if (response.ok) {
        //     return data.accessToken;
        // }
    } catch (error) {
        if (error.message) {
            throw error.message;
        } else {
            throw error;
        }
    }
};
