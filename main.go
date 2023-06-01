package main

import (
	"context"
	"fmt"
	"log"
	"os"

	firebase "firebase.google.com/go"
)

func main() {
	fmt.Println("project id")
	projectID := os.Getenv("GCP_PROJECT_ID")
	if projectID == "" {
		log.Fatalln("GCP_PROJECT_ID environment variable must be set.")
	}

	// Use the application default credentials
	fmt.Println("init firebase app")
	ctx := context.Background()
	conf := &firebase.Config{ProjectID: projectID}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("init firestore client")
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("call the add method")
	type AAA struct {
		FieldX string
		FieldY int
	}
	aaa := AAA{"blowa", 254}
	_, _, err = client.Collection("abcccdde").Add(ctx, &aaa)
	if err != nil {
		log.Fatalf("Failed adding: %v", err)
	}

	fmt.Println("finished")
	defer client.Close()
}
