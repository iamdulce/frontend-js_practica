export const noAuthenticatedView = () => {
    return ` <span class="home-link"><a href="./index.html">Home</a></span>
    <ul>
        <li>
            <a href="./login.html">Login</a>
            <a href="./signup.html">Signup</a>
        </li>
    </ul>`;
};

export const authenticatedSessionView = () => {
    return ` <span class="home-link"><a href="./index.html">Home</a></span>
    <ul>
        <li>
            
            <a href="./product-creation.html">Add product</a>
            <button id="btn-logout">Log out</button>
        </li>
    </ul>`;
};
