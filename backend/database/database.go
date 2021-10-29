package database

import (
	"log"
	"os"
	"product-list/models"
	"time"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DBConn *gorm.DB

func Connect() *gorm.DB {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error in dotEnv, %v", err)
	}

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: os.Getenv("DATABASEURL"),
	}), &gorm.Config{})

	if err != nil {
		log.Fatalf("Error in database connection, %v", err)
	}

	sqlDB, err := db.DB()

	sqlDB.SetMaxOpenConns(1000)

	sqlDB.SetMaxIdleConns(1000)

	sqlDB.SetConnMaxLifetime(time.Second)

	var (
		user models.User
	)

	db.AutoMigrate(&user)

	return db
}
