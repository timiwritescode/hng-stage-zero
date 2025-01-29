# HNG12 Stage 0 Backend Task - Public API

## Description
This is a simple public API developed as part of the HNG12 Stage 0 backend task. The API provides basic information, including the developer's registered email, the current datetime in ISO 8601 format, and the GitHub repository URL of the project.

## Features
- Accepts `GET` requests.
- Returns a JSON response with the required fields.
- Dynamically generates the current datetime in **ISO 8601 format (UTC)**.

---

## API Documentation
### Endpoint
```plaintext
GET https://hng-stage-zero-production.up.railway.app/user/timi
```

### Response Format (`200 OK`)
```json
{
  "email": "example@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/github_repo"
}
```

### Example Usage
```sh
curl -X GET https://hng-stage-zero-production.up.railway.app/user/timi
```

---

## Technology Stack
This API was built using:
- **NestJs**
- Deployed on **Railway**
- Version control with **GitHub**

---

## Installation & Running Locally
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone git@github.com:timiwritescode/hng-stage-zero.git
   cd hng-stage-zero
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the server: 


    For development environment:
   ```sh
   npm run start:dev
   ```

    For production environment:

    ```sh
   npm run start:prod
   ```
   
4. Access the API at:
   ```plaintext
   http://localhost:3006
   ```

---

## Deployment
The API is publicly accessible at:
```
https://hng-stage-zero-production.up.railway.app/user/timi
```

### Deployment Steps
- Deploy using **(your chosen platform: Vercel, Render, Railway, AWS, Heroku, etc.)**

---

## Additional Resources
- [HNG12 Website](https://hng.tech/)
- Learn more about your tech stack:
  - [Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

## Author
- **Odebode Oluwatimilehin**
- GitHub: [@timiwritescode](https://github.com/yourusername)
- Email: odebodezion@gmail.com

