import { createUser } from "./signupModel.js";

export const signupController = signupForm => {
    signupForm.addEventListener("submit", async event => {
        event.preventDefault();

        try {
            const { email, password, passwordConfirmation } =
                getSignupData(signupForm);

            if (isFormValid(email, password, passwordConfirmation)) {
                await createUser(email, password);
                alert("You have registered sucesfully");
                window.location = "./login.html";
            }
        } catch (error) {
            alert(error);
        }
    });
};

const isFormValid = (email, password, passwordConfirmation) => {
    const emailValidation = isEmailValid(email);
    const passwordValidation = isPasswordValid(password, passwordConfirmation);
    return emailValidation && passwordValidation;
};

const isEmailValid = email => {
    const emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let result = true;

    if (!emailRegExp.test(email)) {
        throw "Email is not valid";
    }

    return result;
};

const isPasswordValid = (password, passwordConfirmation) => {
    let result = true;
    if (password !== passwordConfirmation) {
        throw "The passwords are not the same";
    }
    return result;
};

const getSignupData = signupForm => {
    const formData = new FormData(signupForm);
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirmation = formData.get("password-confirmation");

    return {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
    };
};
