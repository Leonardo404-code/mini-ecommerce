package controllers

import (
	"product-list/src/database"
	"product-list/src/models"

	"github.com/badoux/checkmail"
	"github.com/gofiber/fiber/v2"
)

func GetUser(c *fiber.Ctx) error {
	return c.SendString("hi")
}

func CreateUser(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		c.Status(fiber.StatusUnprocessableEntity)
		return c.JSON(fiber.Map{
			"error": "body parse failed",
		})
	}

	searchUser := database.DBConn.Table("users").Where("email = ?", user.Email).
		Find(&user).RowsAffected

	if searchUser > 0 {
		c.Status(fiber.StatusConflict)
		return c.JSON(fiber.Map{
			"error": "user already exist",
		})
	}

	if len(user.Name) < 3 || len(user.Name) > 100 {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "name field must be between 3 and 100 characters",
		})
	}

	if err := checkmail.ValidateFormat(user.Email); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "invalid e-mail",
		})
	}

	if len(user.Password) < 8 {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "password field cannot be less than 8 characters",
		})
	}

	if err := database.DBConn.Create(&user); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to create a user",
		})
	}

	return c.JSON(user)
}

func DeleteUser(c *fiber.Ctx) error {
	var user models.User

	idParam := c.Params("id")

	if err := database.DBConn.Table("users").Where("id = ?", idParam).Find(&user); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to find user",
		})
	}

	if user.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"error": "user not found",
		})
	}

	if err := database.DBConn.Table("users").Where("id = ?", idParam).Delete(&user); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to delete user",
		})
	}

	return c.JSON(user)
}
