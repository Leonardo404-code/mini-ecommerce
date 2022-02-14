package main

import (
	"log"
	"os"
	"product-list/src/config"
	"product-list/src/database"
)

func init() {
	database.DBConn = database.Connect()
}

func main() {
	app := config.Setup()

	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
