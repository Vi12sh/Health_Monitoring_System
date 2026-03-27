# Health Monitoring System

## Overview
This project is a **Health Monitoring System** that integrates **Arduino, ESP8266/ESP32, sensors, a Node.js backend, and a React frontend**. The system collects real-time health data from sensors, sends it to a backend server, and displays the data in a user-friendly web interface.

## Project Structure
```
health-monitoring-project/
│── backend/               # Node.js + Express Backend
│   │── server.js         # Main server file
│   │── config/           # Configuration files
│   │── models/           # Database models
│   │── routes/           # API routes
│   │── .env              # Environment variables
│   └── package.json      # Backend dependencies
│
│── frontend/              # React + Vite Frontend
│   │── src/              # Frontend source files
│   │── public/           # Static assets
│   │── .env              # Frontend environment variables
│   └── package.json      # Frontend dependencies
│
│── arduino-code/          # Arduino + ESP8266/ESP32 Code
│   └── health_monitor.ino
│
└── README.md              # Project Documentation
```

## Prerequisites
Make sure you have the following installed:
- **Node.js & npm** (for backend & frontend)
- **MongoDB** (for data storage)
- **Arduino IDE** (for ESP8266/ESP32 programming)

## Backend Setup (Node.js + Express + MongoDB)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file with MongoDB connection:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```
   or use:
   ```sh
   npx nodemon server.js
   ```
5. The backend will be running on **http://localhost:5000**

## Frontend Setup (React + Vite)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open **http://localhost:5173** in your browser.

## ESP8266/ESP32 + Arduino Setup
1. Install the **ESP8266/ESP32 board support** in Arduino IDE.
2. Connect the ESP8266/ESP32 to your computer.
3. Open **health_monitor.ino** in Arduino IDE.
4. Edit Wi-Fi credentials in the code:
   ```cpp
   const char* ssid = "your_wifi_ssid";
   const char* password = "your_wifi_password";
   const char* server = "http://your_backend_ip:5000/api/sensor/data";
   ```
5. Upload the code to the ESP8266/ESP32.
6. Open the **Serial Monitor** to see connection status.

## API Endpoints
| Method | Endpoint                 | Description                     |
|--------|--------------------------|---------------------------------|
| POST   | `/api/sensor/data`       | Receives sensor data           |
| GET    | `/api/sensor/history`    | Fetch historical sensor data   |

## Features
✅ Real-time sensor data monitoring  
✅ Historical data visualization  
✅ Alerts and notifications  
✅ Mobile-friendly web UI  

## Troubleshooting
- If **MongoDB connection fails**, check if MongoDB is running.
- If **ESP8266/ESP32 doesn't connect**, check Wi-Fi credentials.
- If **frontend doesn't load**, check Vite server logs (`npm run dev`).

## Future Improvements
- Implement **authentication** for users.
- Add **cloud deployment** (AWS, Firebase, or DigitalOcean).
- Improve **data analytics and visualization**.

## Contributors
- **Your Name** - Rishikesh,Vishal,Vishank,Yash
- Open to contributions! Feel free to fork & submit PRs.

## License
This project is licensed under the **MIT License**.

---
📧 **Contact**: rishikesh7115.ca24@chitkara.edu.in

