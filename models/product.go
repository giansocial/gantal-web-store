package models

// Product represents a product in the Gantal catalog.
type Product struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Price       float64  `json:"price"`
	Images      []string `json:"images"`
	Category    string   `json:"category"`
	Colors      []string `json:"colors,omitempty"`
}
