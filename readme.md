# Práctica 6 (Desarrollo Frontend con Javscript)

## Wallapop clone

### Initial setup:

Clone [sparrest.js](https://github.com/kasappeal/sparrest.js) repository

```sh
$ npm install
$ npm start
```

### BBDD

Check list of products within the file db.json (user: dulce@kc.com, password: 123456)

### Endpoints

-http://127.0.0.1:8080/ Products list

-http://localhost:8000/api/products/${id}?\_expand=user Product detail: Users will be able to delete the product if they were the one who created it.

-http://localhost:8000/api/products Product creation: visible for logged in users only.

-http://127.0.0.1:8080/signup.html Sign up form. Create new user

-http://127.0.0.1:8080/login.html Login form
