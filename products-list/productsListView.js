export const emptyProducts = () => {
    return `<h3>Sorry! No products to display.</h3>`;
};

export const buildProducts = product => {
    return `
    <img src="${product.image}" alt="product image"/>
    <span>${product.name}</span>
    <span>${product.description}</span>
    <p>${product.price}</p>
    <p>${product.status}</p>
    `;
};
