export const noAuthenticatedView = () => {
    return `<ul>
        <li>
            <a href="./login.html">Login</a>
            <a href="./signup.html">Signup</a>
        </li>
    </ul>`;
};

export const authenticatedSessionView = () => {
    return `<ul>
        <li>
            <a href="./product-creation.html">Add product</a>
            <button id="btn-logout">Log out</button>
        </li>
    </ul>`;
};
