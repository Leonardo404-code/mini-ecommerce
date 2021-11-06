package models

import (
	"errors"

	"golang.org/x/crypto/bcrypt"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name     string `gorm:"size:255; not null;" json:"name"`
	Email    string `gorm:"size:255; not null; unique;" json:"email"`
	Password string `gorm:"size:255; not null;" json:"password"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	passwordHash, erro := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)

	if erro != nil {
		return errors.New("error in hash password")
	}

	u.Password = string(passwordHash)

	return
}
