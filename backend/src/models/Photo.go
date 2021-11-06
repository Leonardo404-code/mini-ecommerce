package models

type Photo struct {
	ProductID uint64 `gorm:"not null" json:"product_id"`
	Url       string `gorm:"not null;" json:"url"`
	FileName  string `gorm:"not null" json:"file_name"`
}
