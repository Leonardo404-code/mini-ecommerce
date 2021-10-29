package routes

import (
	"product-list/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) {
	app.Get("/user", controllers.GetUser)
}
