# Backend aplication

### Install dependencies

```go
go mod tidy

// Then

go mod vendor
```

### Connect to database

- Replace the environment variable in folder database to your database URL (Postgres)

### Replace api key in project on backend

- backend file: src/controllers/paymentController.go

### Start aplication

```go
go run main.go
```
