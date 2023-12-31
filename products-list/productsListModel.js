export const getProducts = async () => {
    const url = "http://localhost:8000/api/products";
    let data;

    try {
        const response = await fetch(url);
        if (response.ok) {
            data = await response.json();
        } else {
            throw new Error("There was an error, please try again later");
        }
    } catch (error) {
        throw error.message;
    }

    return data;
};
