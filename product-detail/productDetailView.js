export const buildProduct = product => {
    return `
    <div class="product">
        <div class="product-detail-image_container">
            <img src="${product.image}" alt="product image" onerror="this.src='https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'"/>
        </div>
        <div class="product-detail-text_container">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-description">${product.description}</p>
            <span class="product-price">${product.price} €</span>
            <span class="product-status">${product.status}</span>
        </div
    </div>
    `;
};
