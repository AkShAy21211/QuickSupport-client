# QuickSupport

## Overview
This project is a Help & Support Dashboard that allows users to log in, access support resources, and raise tickets for issues or inquiries. It includes functionalities for user authentication, a help and support page, and a ticketing system that captures support requests in a database.

## Login Screen
![Screenshot 2024-10-25 100229](https://github.com/user-attachments/assets/886c5db9-0eae-4b51-8aaa-0fd3d2b84eb9)

## DashBoard Screen
![Screenshot 2024-10-25 100241](https://github.com/user-attachments/assets/98952f75-6986-4519-94b0-23b8e1e380fe)

## Features

1. **Login Page**: 
   - Users can log in using their email credentials.
   - The login functionality authenticates users and maintains session management.

2. **Help & Support Page**: 
   - Accessible from the dashboard after logging in.
   - Contains information and resources to assist users with common issues.

3. **Ticket Management**: 
   - Users can raise support tickets using a form on the Help & Support page.
   - Upon submission, tickets are captured in the database, and a unique Ticket ID is generated for each request.

## Getting Started

### Prerequisites
- Node.js (version X.X.X)
- MongoDB (or your chosen database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git

2. Navigate into the project directory:

   ```bash
   cd your-repo-name

3. Install the required dependencies:

   ```bash
   npm install

4. Set up environment variables:

-Create a .env file in the root directory and define the necessary variables (e.g., database connection strings, JWT secret, etc.).


5.Start the development server:

   ```bash
  npm run start

Open your browser and navigate to http://localhost:3000 to view the application.




