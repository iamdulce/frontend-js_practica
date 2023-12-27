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

export const deleteProduct = async (id, token) => {
    const url = `http://localhost:8000/api/products/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};
