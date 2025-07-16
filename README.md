# 🔐 Secure API – Week 4: Advanced Threat Detection & Web Security

This project implements a secure Node.js API with real-time intrusion detection and modern web security enhancements as part of the Week 4 task.

## 🎯 Goal

Enhance backend security through:
- Real-time monitoring (Fail2Ban)
- Secure API practices (rate limiting, CORS, API key auth)
- Proper HTTP headers and CSP

---

## 🛡️ Features Implemented

### 1. Intrusion Detection & Monitoring
- ✅ **Fail2Ban** is installed and actively monitoring `/var/log/auth.log`
- ✅ Automatic IP banning after multiple failed SSH login attempts

### 2. API Security Hardening
- ✅ `express-rate-limit` to limit requests per minute
- ✅ CORS configuration to restrict origins
- ✅ API Key-based authentication via custom middleware

### 3. Security Headers & CSP
- ✅ `helmet` for setting:
  - Strict-Transport-Security (HSTS)
  - Content-Security-Policy (CSP)
  - X-Content-Type-Options
  - X-Frame-Options

---

## 🚀 Getting Started

```bash
git clone https://github.com/MaryamAmjad-tech/secure-api.git
cd secure-api
npm install
node server.js


## .env File Example
PORT=3000
API_KEY=my_secure_api_key

## Secure Endpoint
GET /api/secure

## Header Required:
x-api-key: my_secure_api_key

Technologies Used
Node.js + Express

express-rate-limit

helmet

cors

dotenv

Fail2Ban (System-wide)

✅ Result
Real-time SSH threat monitoring working via Fail2Ban

API fully protected from brute-force, CORS bypass, and injection

Security headers implemented and verified

