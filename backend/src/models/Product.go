package models

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name        string  `gorm:"size:255; not null;" json:"name"`
	Description string  `gorm:"null" json:"description"`
	Value       float64 `gorm:"not null;" json:"value"`
	Units       int64   `gorm:"not null" json:"units"`
	Photo       Photo   `gorm:"foreingKey:ProductID; references:ID; constraint:OnDelete:SET NULL;" json:"photo"`
}
