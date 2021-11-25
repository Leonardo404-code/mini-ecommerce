package models

import "gorm.io/gorm"

type Payment struct {
	gorm.Model
	Amount int64  `gorm:"not null"; json:"amount"`
	Email  string `gorm:"not null"; json:"email"`
}
