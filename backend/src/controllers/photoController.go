package controllers

import (
	"fmt"
	"product-list/src/database"
	"product-list/src/models"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func GetPhotos(c *fiber.Ctx) error {
	var photo []models.Photo

	if err := database.DBConn.Find(&photo); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to find photos",
		})
	}

	return c.JSON(photo)
}

func UploadPhoto(c *fiber.Ctx) error {
	idParam, err := strconv.ParseUint(c.Params("id"), 10, 64)

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "failed to convert id to uint",
		})
	}

	file, err := c.FormFile("photo")

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "erro to load file",
		})
	}

	uniqueId := uuid.New()

	filename := strings.Replace(uniqueId.String(), "-", "", -1)

	fileExt := strings.Split(file.Filename, ".")[1]

	if fileExt != "png" && fileExt != "jpg" && fileExt != "jpeg" {
		c.Status(fiber.StatusNotAcceptable)
		return c.JSON(fiber.Map{
			"error": "image is not a png/jpg/jpeg file",
		})
	}

	image := fmt.Sprintf("%s.%s", filename, fileExt)

	imagePath := fmt.Sprintf("http://localhost:8080/images/%s", image)

	if err := database.DBConn.Create(&models.Photo{
		ProductID: idParam,
		FileName:  image,
		Url:       imagePath,
	}); err.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"error": "erro in create photo",
		})
	}

	err = c.SaveFile(file, fmt.Sprintf("./images/%s", image))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "failed to save file",
		})
	}

	return c.JSON(fiber.Map{
		"product_id": idParam,
		"file_name":  image,
		"url":        imagePath,
	})
}
