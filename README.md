🛡️ AegisX – AI Powered Cloud Security & Threat Intelligence Platform

Monitor • Detect • Analyze • Protect

AegisX is a modern, enterprise-grade cloud security monitoring and threat intelligence platform designed to help organizations detect, analyze, and respond to cybersecurity threats in real time. The platform collects security events from cloud applications, identifies suspicious activities using rule-based detection and AI-assisted analysis, and provides an intuitive dashboard for monitoring security posture and managing incidents.

This project is built as a professional portfolio application to demonstrate expertise in Cloud Computing, Cybersecurity, Full-Stack Development, REST API Design, AI Integration, and DevOps.

⸻

🚀 Key Features

🔐 Authentication & Security

* Secure User Registration & Login
* JWT Authentication
* Refresh Token Support
* BCrypt Password Encryption
* Email Verification
* Forgot Password
* Role-Based Access Control (RBAC)
* Admin, Security Analyst, and User Roles

⸻

📊 Security Operations Dashboard

Interactive dashboard displaying:

* Overall Security Score
* Active Users
* Login Activity
* Failed Login Attempts
* Open Security Incidents
* Threat Distribution
* Attack Timeline
* Recent Security Events
* AI Threat Summary

⸻

📜 Security Log Management

Collect and manage:

* User Login Logs
* Failed Authentication Attempts
* API Request Logs
* User Activity Logs
* Audit Logs
* System Events

Features include:

* Search
* Filtering
* Pagination
* Export

⸻

🚨 Threat Detection Engine

Automatically detects:

* Brute Force Attacks
* Multiple Failed Login Attempts
* Suspicious IP Address Changes
* Impossible Travel Logins
* SQL Injection Patterns
* Cross-Site Scripting (XSS) Attempts
* Unauthorized API Requests
* Privilege Escalation Attempts

Each detected event is classified based on severity:

* Low
* Medium
* High
* Critical

⸻

🤖 AI Threat Intelligence

AI-powered analysis provides:

* Threat Summary
* Severity Classification
* Risk Score
* Recommended Mitigation
* Security Insights
* Incident Explanation

Example:

Threat: Multiple failed login attempts detected.

AI Analysis:

This behavior resembles a brute-force attack. The account should be temporarily locked, the source IP should be investigated, and Multi-Factor Authentication should be enabled.

⸻

📂 Incident Management

Security analysts can:

* Create Incidents
* Assign Analysts
* Update Status
* Add Investigation Notes
* Track Incident Timeline
* Close Incidents
* View Incident History

Incident Status:

* Open
* Investigating
* Resolved
* Closed

⸻

📧 Notification System

Automatic notifications for:

* High-Risk Logins
* Account Lock Events
* Security Incidents
* Password Changes
* Administrator Alerts

Notifications are delivered through:

* Email
* In-App Alerts

⸻

📄 Reports

Generate professional reports in:

* PDF
* CSV

Available reports:

* Daily Security Report
* Weekly Security Report
* Monthly Security Report
* Incident Report
* Threat Summary Report

⸻

🏗️ System Architecture

                   +----------------------+
                   |      React UI        |
                   +----------+-----------+
                              |
                        REST API (HTTPS)
                              |
                   +----------+-----------+
                   | Spring Boot Backend  |
                   +----------+-----------+
                              |
       +-----------+----------+-----------+-----------+
       |           |                      |           |
 PostgreSQL   Threat Engine        AI Analysis   Email Service
       |                                              |
 Security Logs                               Email Notifications

⸻

⚙️ Technology Stack

Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* React Router
* Framer Motion
* Recharts

⸻

Backend

* Java 21
* Spring Boot 3.5
* Spring Security
* Spring Data JPA
* Spring Validation
* Spring Mail
* Lombok
* MapStruct

⸻

Database

* PostgreSQL

⸻

Authentication

* JWT
* Refresh Tokens
* BCrypt

⸻

AI Integration

* OpenAI API (or compatible LLM)
* AI-based Threat Analysis
* Security Recommendations

⸻

Cloud & DevOps

* Docker
* Docker Compose
* AWS EC2
* AWS S3 (Optional)
* GitHub Actions
* Nginx

⸻

API Documentation

* Swagger / OpenAPI

⸻

📁 Project Structure

AegisX/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── docker/
│   └── docker-compose.yml
│
├── docs/
│   ├── architecture/
│   ├── api/
│   └── screenshots/
│
├── README.md
└── LICENSE

⸻

🗄️ Database Modules

* Roles
* Users
* Refresh Tokens
* Security Logs
* Threat Rules
* Threat Analysis
* Incidents
* Incident Comments
* Notifications
* Reports
* Audit Logs

⸻

👥 User Roles

👑 Admin

* Manage Users
* Configure System
* View All Logs
* Assign Roles
* Generate Reports

🛡️ Security Analyst

* Investigate Incidents
* Analyze Threats
* View Logs
* Update Incident Status

👤 User

* Login
* View Personal Activity
* Manage Profile
* Receive Security Alerts

⸻

🔄 Application Workflow

User Login
      │
      ▼
Authentication
      │
      ▼
Security Log Created
      │
      ▼
Threat Detection Engine
      │
      ▼
AI Threat Analysis
      │
      ▼
Incident Created
      │
      ▼
Dashboard Updated
      │
      ▼
Email Notification Sent
      │
      ▼
PDF Report Generated

⸻

🔒 Security Features

* JWT Authentication
* Role-Based Authorization
* Password Encryption
* Input Validation
* Global Exception Handling
* Secure REST APIs
* Audit Logging
* Security Event Monitoring

⸻

📈 Future Enhancements

* Multi-Factor Authentication (MFA)
* WebSocket Real-Time Alerts
* SIEM Integration
* AWS CloudWatch Integration
* Kubernetes Deployment
* Mobile Application
* Threat Intelligence Feed Integration
* Machine Learning Anomaly Detection

⸻

🎯 Learning Outcomes

This project demonstrates practical knowledge of:

* Cloud Computing
* Cybersecurity
* Spring Boot
* React
* REST API Development
* PostgreSQL
* Docker
* JWT Authentication
* AI Integration
* DevOps
* Secure Software Architecture
* Enterprise Application Development

⸻

📜 License

This project is developed for educational, research, and portfolio purposes.

⸻

👨‍💻 Author

Bavya M

Department: B.E. Computer Science and Engineering

Project: AegisX – AI Powered Cloud Security & Threat Intelligence Platform

“Building secure cloud applications through modern software engineering and cybersecurity practices.”
