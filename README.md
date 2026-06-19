# Razorpay Payment Gateway Integration

A full-stack payment gateway integration using **React**, **TypeScript**, **Node.js**, **Express**, and **Razorpay**. This project demonstrates how to create Razorpay orders, process payments through the Razorpay Checkout SDK, and verify payment signatures securely on the backend.

## Features

* Razorpay Checkout integration
* Create payment orders from backend
* Secure payment signature verification
* React + TypeScript frontend
* Node.js + Express backend
* Environment variable support
* Ready for deployment on Vercel, Render, and MongoDB Atlas

---

## Tech Stack

### Frontend

* React
* TypeScript
* Axios
* Razorpay Checkout SDK

### Backend

* Node.js
* Express
* Razorpay SDK
* Crypto

---

## Project Structure

```text
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone git@github.com:vishalghag/Razor_pay_Integration.git

cd razorpay-integration
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5500

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Start the backend server:

```bash
npm start
```

Server will run on:

```text
http://localhost:5500
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API Endpoints

### Create Order

**POST**

```http
/payment/orders
```

Creates a new Razorpay order.

#### Response

```json
{
  "id": "order_xxxxxxxxx",
  "currency": "INR",
  "amount": 50000
}
```

---

### Verify Payment

**POST**

```http
/payment/success
```

#### Request Body

```json
{
  "orderCreationId": "order_xxxxx",
  "razorpayPaymentId": "pay_xxxxx",
  "razorpayOrderId": "order_xxxxx",
  "razorpaySignature": "signature_xxxxx"
}
```

#### Response

```json
{
  "msg": "success"
}
```

---

## Payment Flow

```text
User
  │
  ▼
React Frontend
  │
  ▼
Create Order API
  │
  ▼
Node.js Backend
  │
  ▼
Razorpay Order Created
  │
  ▼
Frontend Opens Razorpay Checkout
  │
  ▼
User Completes Payment
  │
  ▼
Razorpay Returns Payment Details
  │
  ▼
Backend Verifies Signature
  │
  ▼
Payment Confirmed
```

---

## Environment Variables

### Backend

```env
PORT=5500

RAZORPAY_KEY_ID=your_key_id

RAZORPAY_KEY_SECRET=your_secret_key
```

---

## Deployment

### Frontend

Deploy using:

* Vercel

### Backend

Deploy using:

* Render
* Railway
* AWS
* VPS

### Database (Optional)

* MongoDB Atlas

---

## Security Notes

* Never expose Razorpay Secret Key in frontend code.
* Always verify payment signatures on the backend.
* Store environment variables securely.
* Use HTTPS in production.

---

## Future Enhancements

* Store transactions in MongoDB
* User authentication
* Subscription payments
* Payment history dashboard
* Email notifications
* Webhook integration
* Invoice generation

---

## Author

Developed as a learning project for integrating Razorpay payments using React and Node.js.
