# Blood‑For‑Lives

**Blood Management System**

---

##  Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Structure](#architecture--structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact / Support](#contact--support)

---

## About
Blood‑For‑Lives is a comprehensive Blood Management System designed to streamline the processes of donor registration, blood inventory tracking, donation requests, and user administration. With both frontend and backend components, this system offers an integrated solution to manage blood donations effectively.

---

## Features
- Donor registration and management
- Blood stock inventory tracking (by type, quantity)
- Request and fulfill donation requests
- Administrative dashboard for monitoring and management
- Secure authentication and user role management

---

## Tech Stack
- **Frontend**: JavaScript, HTML, CSS
- **Backend**: Java (Spring Boot), C# (ASP.NET / .NET Core)
- **Additional Tools**: (Add any frameworks, libraries, or tools you’re using, such as React, Angular, Bootstrap, Entity Framework, etc.)

---

## Architecture & Structure
```
Blood‑For‑Lives/
├── FrontEnd/         # Contains the frontend code (HTML/CSS/JavaScript)
├── Spring‑/BackEnd/  # Java Spring Boot backend
├── DotNet/           # C# .NET backend
├── .gitignore
└── README.md
```
- **FrontEnd/** – Static client-side application files
- **Spring‑/BackEnd/** – REST API endpoints and business logic with Java
- **DotNet/** – Alternative backend implementation using .NET technologies (if applicable)

---

## Getting Started

### Prerequisites
- Java Development Kit (JDK) 17+ or compatible
- .NET SDK (if using the .NET backend)
- Node.js & npm (if applicable)
- Database (MySQL / PostgreSQL / SQL Server) and appropriate config

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/aniruddha7447/Blood-For-Lives.git
   cd Blood‑For‑Lives
   ```

2. **For Java Spring backend**:
   ```bash
   cd Spring‑/BackEnd/
   mvn clean install
   mvn spring-boot:run
   ```
   
3. **For .NET backend**:
   ```bash
   cd DotNet/
   dotnet build
   dotnet run
   ```

4. **For Frontend**:
   If using static files:
   ```bash
   cd FrontEnd/
   # Open index.html in browser or serve via HTTP server
   ```
   Or if using a framework with npm:
   ```bash
   cd FrontEnd/
   npm install
   npm start
   ```

---

## Usage
- Access the frontend via your browser (e.g., `http://localhost:3000` or `index.html`)
- Ensure the backend API is running (`http://localhost:8080` for Java, or default .NET port)
- Register a donor, view inventory, log donation requests, and manage via admin panel.

---


## Contact / Support
For questions or feedback, you can reach me at:
- **GitHub**: [aniruddha7447](https://github.com/aniruddha7447)
- **Email**: aniruddhalalge283@gmail.com
