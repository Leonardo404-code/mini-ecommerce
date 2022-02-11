package main

import (
	"log"
	"os"
	"product-list/src/config"
	"product-list/src/database"

	_ "github.com/joho/godotenv/autoload"
)

func init() {
	database.DBConn = database.Connect()
}

func main() {
	app := config.Setup()

	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
