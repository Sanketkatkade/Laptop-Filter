# Laptop Recommender 💻

A Node.js web application that helps users find their perfect laptop based on budget and specifications. The application uses a comprehensive dataset of laptops to provide personalized recommendations through advanced filtering options.

## Features

- Budget-based laptop recommendations
- Advanced filtering system based on:
  - Processor type and generation
  - RAM capacity and type
  - Storage type (SSD/HDD) and capacity
  - Graphics card specifications
  - Display size and resolution
  - Brand preferences
  - Use case categories (Gaming, Professional, Student, etc.)
- User-friendly interface with responsive design
- Save and share recommendation lists

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating engine, Bootstrap 5

## Project Structure

```
laptop-recommender/
├── controllers/        # Route controllers
├── data/               # Dataset
├── models/             # models
├── public/             # Static files
│   ├── styles/
│   └── js/
├── routes/            # Express routes
├── utils/             # Helper functions
├── views/             # EJS templates
├── app.js            # Application entry point
├── .gitignore
├── package-lock.json
├── README.md
└── package.json
```

## Dataset

The laptop dataset is regularly updated and includes:
- Latest models from major manufacturers
- Detailed technical specifications
- Current market prices
- User ratings and reviews

## Status

🚀 Active Development - Currently in version 1.0.0
- Initial steps
    - npm init -y
    - npm install express mongoose dotenv cors body-parser