package routes

import (
	"product-list/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func PaymentRoutes(app *fiber.App) {
	app.Post("/pay", controllers.CreatePaymentIntent)
	app.Post("/save", controllers.SavePayment)
}
