package handlers

import (
	"encoding/json"
	"gantal-store/data"
	"gantal-store/models"
	"net/http"
	"strings"
)

// Handler holds the application state.
type Handler struct {
	products []models.Product
}

// New creates a new Handler with product data loaded.
func New() *Handler {
	return &Handler{products: data.GetAllProducts()}
}

// HandleProducts handles GET /api/products (optionally filtered by category query param).
func (h *Handler) HandleProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	category := r.URL.Query().Get("category")
	if category == "" {
		json.NewEncoder(w).Encode(h.products)
		return
	}

	var filtered []models.Product
	for _, p := range h.products {
		if p.Category == category {
			filtered = append(filtered, p)
		}
	}
	if filtered == nil {
		filtered = []models.Product{}
	}
	json.NewEncoder(w).Encode(filtered)
}

// HandleProductByID handles GET /api/products/{id}
func (h *Handler) HandleProductByID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id := strings.TrimPrefix(r.URL.Path, "/api/products/")
	if id == "" {
		h.HandleProducts(w, r)
		return
	}

	for _, p := range h.products {
		if p.ID == id {
			json.NewEncoder(w).Encode(p)
			return
		}
	}
	http.Error(w, `{"error":"product not found"}`, http.StatusNotFound)
}
