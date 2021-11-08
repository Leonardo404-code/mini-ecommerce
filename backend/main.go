package main

import (
	"log"
	"os"
	"product-list/src/database"
	"product-list/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func init() {
	database.DBConn = database.Connect()
}

func main() {
	app := fiber.New()

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error in dotEnv, %v", err)
	}

	corsSettings := cors.New(cors.Config{
		AllowMethods:     "GET,POST,HEAD,OPTIONS,PUT,DELETE,PATCH",
		AllowHeaders:     "Origin, Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization,X-Requested-With",
		ExposeHeaders:    "*, Authorization",
		AllowCredentials: true,
	})

	app.Use(corsSettings)

	routes.ProductRoutes(app)

	app.Static("/images", "./images")

	app.Listen(":" + os.Getenv("PORT"))
}
