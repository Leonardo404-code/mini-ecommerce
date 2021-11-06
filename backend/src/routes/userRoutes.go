package routes

import (
	"product-list/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) {
	app.Get("/user", controllers.GetUser)
	app.Post("/user/create", controllers.CreateUser)
	app.Delete("/user/delete/:id", controllers.DeleteUser)
}
