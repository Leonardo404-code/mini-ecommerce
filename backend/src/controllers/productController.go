package controllers

import (
	"math"
	"product-list/src/database"
	"product-list/src/models"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetProducts(c *fiber.Ctx) error {
	var (
		product    []models.Product
		totalPages int64
	)

	page, err := strconv.Atoi(c.Query("page"))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error":   err,
			"message": "Error to get the query page",
		})
	}

	totalPages = database.DBConn.Find(&product).RowsAffected

	if totalPages == 0 {
		totalPages = 1
	}

	if err := database.DBConn.Preload("Photo").Offset((page - 1) * 7).Limit(5).Order("id desc").
		Find(&product); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to find products",
		})
	}

	return c.JSON(fiber.Map{
		"data":  product,
		"page":  page,
		"total": math.Ceil(float64(totalPages) / 10),
	})
}

func GetProduct(c *fiber.Ctx) error {
	var product models.Product

	idParam := c.Params("id")

	if err := database.DBConn.Where("id = ?", idParam).Preload("Photo").Find(&product); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to find a product",
		})
	}

	if product.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"error": "product not found",
		})
	}

	return c.JSON(product)
}

func CreateProduct(c *fiber.Ctx) error {
	var product models.Product

	if err := c.BodyParser(&product); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "failed to parse-body",
		})
	}

	if product.Name == "" {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "name fild canot be empty",
		})
	}

	if product.Value == 0.0 {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "value cannot be zero",
		})
	}

	if product.Units == 0 {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "you need to have more than one unit to create the product",
		})
	}

	if err := database.DBConn.Create(&product); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "error in create product",
		})
	}

	return c.JSON(product)
}

func DeleteProduct(c *fiber.Ctx) error {
	var product models.Product

	idParam := c.Params("id")

	if err := database.DBConn.Where("id = ?", idParam).Find(&product); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to find product",
		})
	}

	if product.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"error": "product not found",
		})
	}

	if err := database.DBConn.Where("id = ?", idParam).Delete(&product); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to delete product",
		})
	}

	return c.JSON(product)
}