package config

import (
	"product-list/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func Setup() *fiber.App {
	app := fiber.New()

	corsSettings := cors.New(cors.Config{
		AllowOrigins:     "http://localhost:3000",
		AllowMethods:     "GET,POST,HEAD,OPTIONS,PUT,DELETE,PATCH",
		AllowHeaders:     "Origin, Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization,X-Requested-With",
		ExposeHeaders:    "*, Authorization",
		AllowCredentials: true,
	})

	app.Use(corsSettings)

	routes.ProductRoutes(app)
	routes.PaymentRoutes(app)

	app.Static("/images", "./images")

	return app
}
