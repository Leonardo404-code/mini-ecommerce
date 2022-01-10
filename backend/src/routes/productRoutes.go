package routes

import (
	"product-list/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func ProductRoutes(app *fiber.App) {
	app.Get("/products", controllers.GetProducts)
	app.Get("/product/:id", controllers.GetProduct)
	app.Post("/product/create", controllers.CreateProduct)
	app.Delete("/product/delete/:id", controllers.DeleteProduct)

	// photo routes
	app.Get("/photos", controllers.GetPhotos)
	app.Post("/upload-photo/:id", controllers.UploadPhoto)
}
