# Flask-Vite Dockerized Application

This project is a simple web application that uses **Flask** for the backend and **Vite** (with Vue.js) for the frontend. The application is fully containerized using **Docker** and **Docker Compose** to streamline the setup and deployment process.

## Features

- Flask backend handling API requests
- Vite-powered frontend with Vue.js
- Dockerized environment for easy deployment
- Backend and frontend communicate over a Docker network

## Prerequisites

Before running the application, ensure you have the following installed:

- Docker
- Docker Compose

## Project Structure

    ```
    test/
    ├── backend/
    │ ├── Dockerfile
    │ ├── app.py
    │ ├── requirements.txt
    ├── frontend/
    │ ├── Dockerfile
    │ ├── otherFrontendFiles/
    ├── docker-compose.yml

    ```

## Setup & Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Make sure the `docker-compose.yml` file is properly configured with the correct paths for the frontend and backend Dockerfiles.

3. Build and start the Docker containers using Docker Compose:

   ```bash
   docker compose up --build
   ```

   This will:

   - Build the Docker images for the frontend and backend.
   - Start the containers and connect them to a shared Docker network.

4. Once the containers are up and running, access the frontend and backend:
   - Frontend: [http://localhost:5173](http://localhost:5173) (Vite development server)
   - Backend: [http://localhost:5000](http://localhost:5000) (Flask API)

## Running the Application

The application is divided into two main parts:

- **Frontend (Vue.js with Vite)**: Handles the user interface and communicates with the backend API.
- **Backend (Flask)**: Provides the API endpoints.

The frontend will automatically try to reach the backend at `http://backend:5000` inside the Docker network.

### Endpoints

- **GET /**: Returns a basic "Hello, Flask is running!" message.
- Additional backend routes can be added as needed.

## Docker Commands

- **Build and start containers**:

  ```bash
  docker compose up --build
  ```

- **Stop containers**:

  ```bash
  docker compose down
  ```

- **View logs** (for troubleshooting or monitoring):

  ```bash
  docker compose logs
  ```

- **Access backend logs**:

  ```bash
  docker compose logs backend
  ```

- **Access frontend logs**:
  ```bash
  docker compose logs frontend
  ```

## Troubleshooting

- If you can't access the frontend at `http://localhost:5173`, ensure that the Vite development server is exposed correctly in the Dockerfile. The frontend app may be running on port `5173` inside the container.
- If the backend doesn't respond at `http://localhost:5000`, check the Flask application logs for any errors related to binding the server to `0.0.0.0` or any port issues.

## Notes

- The backend uses Flask and should be configured to run with `host='0.0.0.0'` for external access from the Docker container.
- The frontend uses Vite with Vue.js, and it runs in development mode. You can change the `npm run dev` command if you prefer to run it in production mode.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
