# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "johndoe",
  "password" : "pass1234",
  "name" : "John Doe"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "johndoe",
    "name" : "John Doe"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "johndoe",
  "password" : "pass1234"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "johndoe",
    "name" : "John Doe",
    "token" : "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data" : {
    "username" : "johndoe",
    "name" : "John Doe"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "password" : "pass1234", // optional
  "name" : "John Doe" // optional
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "johndoe",
    "name" : "John Doe"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data" : "OK"
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized, ..."
}
```