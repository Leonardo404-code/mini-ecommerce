package controllers

import (
	"os"
	"product-list/src/models"

	"github.com/gofiber/fiber/v2"
	"github.com/stripe/stripe-go"
	"github.com/stripe/stripe-go/paymentintent"
)

func CreatePaymentIntent(c *fiber.Ctx) error {

	stripe.Key = os.Getenv("STRIPE_TEST")

	var payment models.Payment

	if err := c.BodyParser(&payment); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"error": "error in body-parser",
		})
	}

	params := &stripe.PaymentIntentParams{
		Amount:   &payment.Amount,
		Currency: stripe.String(string(stripe.CurrencyBRL)),
		PaymentMethodTypes: stripe.StringSlice([]string{
			"card",
		}),
		ReceiptEmail: &payment.Email,
	}

	pi, _ := paymentintent.New(params)

	return c.JSON(fiber.Map{
		"client_secret": pi.ClientSecret,
	})
}
