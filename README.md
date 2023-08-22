# Railway Microservice

Railway Microservice is a Node.js application built with Express and MongoDB that provides real-time train schedule information and user registration/authentication features. This project is designed as a sample backend application for railway-related data.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration
- User Authentication
- Fetch Real-time Train Schedules
- Retrieve Train Details

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running locally or a connection to a MongoDB database
- Access to the John Doe Railway Server APIs

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd railway-microservice
2. Install dependencies:
   ```bash
   npm install
3. Create a `.env` file based on the provided `.env.example` and set your environment variables.
4. Run the application:
   ```bash
   npm run dev

## API Endpoints

- **User Registration:**
  - `POST /users/register`
    - Registers a new company and provides `companyName`, `clientID`, and `clientSecret`.

- **User Authentication:**
  - `POST /auth/authenticate`
    - Authenticates the company and provides an `access_token` for accessing protected endpoints.

- **Train Schedules:**
  - `GET /trains`
    - Retrieves real-time train schedules including `trainName`, `trainNumber`, `departureTime` (in hours, minutes, and seconds), `seatsAvailable` (sleeper and AC), `price` (sleeper and AC), and `delayedBy`.

  - `GET /trains/:trainNumber`
    - Retrieves details of a specific train by `trainNumber`.

- **Train Details:**
  - Define your custom endpoints for fetching train details here.

## Database Models

- **Company:**
  - Stores user registration information including `companyName`, `ownerName`, `rollNo`, `ownerEmail`, `accessCode`, `clientID`, and `clientSecret`.

- **AccessToken:**
  - Stores access tokens for user authentication including `companyName`, `clientID`, `ownerName`, `ownerEmail`, `rollNo`, `clientSecret`, `token_type`, `access_token`, and `expires_in`.

- **TrainSchedule:**
  - Stores real-time train schedule data including `trainNumber`, `trainName`, `departureTime`, `seatsAvailable` (sleeper and AC), `price` (sleeper and AC), and `delayedBy`.

- **TrainDetail:**
  - Stores train-specific details as per your requirements.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

Thankyou
