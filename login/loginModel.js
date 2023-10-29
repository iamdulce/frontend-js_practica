export const loginUser = async (email, password) => {
    const url = "http://localhost:8000/auth/login";

    const body = {
        username: email,
        password: password,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json",
        },
    };

    let response;
    try {
        response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
    } catch (error) {
        if (error.message) {
            throw error.message;
        } else {
            throw error;
        }
    }
};
