## **Signup**

- **URL**
  /api/users/signup

- **Method:**
  `POST`
- **Body type** : JSON

- **Data params**

  - **email**: String
  - **cpf** : String
  - **name** : String
  - **password**: String

  - **Success response**

    - **Code:201**

  - **Error response**
    - **Code:400**

## _Login_

- **URL**
  /api/users/login

- **Method:**
  `POST`

- **Data params**

  - **email** : String
  - **password**: String

* **Success response**

  - **Code:200**

- **Error response**

  - **Code:401**

## Create Prescription

- **URL**
  /api/products

- **Method:**
  `POST`

- **Data params**

  - **productName** : String
  - **quantity**: Number

- **Headers**

  - **Cookies**
    `access_token`

* **Success response**

  - **Code:200**

* **Error response**
  - **Code:401**

## GET Prescriptions

- **URL**
  /api/products

- **Method:**
  `GET`

- **Headers**

  - **Cookies**
    `access_token=423493284093fkdjfklsdjalk`

* **Success response**

  - **Code:200**

* **Error response**
  - **Code:401**
