package main

import (
	"gantal-store/handlers"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func cors(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next(w, r)
	}
}

func main() {
	h := handlers.New()

	// API routes
	http.HandleFunc("/api/products", cors(h.HandleProducts))
	http.HandleFunc("/api/products/", cors(h.HandleProductByID))

	// Serve static frontend + images from ./static/
	// On Render the binary runs from repo root, so ./static is always correct.
	staticDir := os.Getenv("STATIC_DIR")
	if staticDir == "" {
		// Default: 'static' folder next to the binary (repo root)
		exe, err := os.Executable()
		if err == nil {
			staticDir = filepath.Join(filepath.Dir(exe), "static")
		} else {
			staticDir = "static"
		}
	}

	fs := http.FileServer(http.Dir(staticDir))
	http.Handle("/", fs)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("🚀 Gantal Store corriendo en :%s", port)
	log.Printf("📁 Estáticos desde: %s", staticDir)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Error: %v", err)
	}
}
