# 🏔️ **NisargPath - Your Gateway to Adventure**

<div align="center">


*Discover the beauty of nature through carefully curated trekking experiences across India*

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?logo=express&logoColor=white)](https://expressjs.com/)

</div>

---

## 🌟 **About NisargPath**

**NisargPath** is a comprehensive full-stack trekking platform that connects adventure enthusiasts with India's most breathtaking destinations. Built with modern web technologies, it offers a seamless experience for discovering, booking, and managing trekking adventures across the Indian subcontinent.

> *"Nisarg" means nature in Sanskrit - embodying our mission to bring you closer to nature's wonders*

---

## ✨ **Key Features**

### 🔐 **Authentication & Security**
- **JWT-based Authentication** with HTTP-only cookies
- **Secure Password Hashing** using SHA-256 with salt
- **Role-based Access Control** (User/Admin)
- **CSRF Protection** with SameSite cookies
- **Contact Number Based Login** for easy access

### 🏞️ **Destination Management**
- **Dynamic Trek Listings** with rich media support
- **Advanced Search & Filtering** by location, price, duration
- **Multiple Date Slots** for flexible booking
- **Real-time Availability** checking
- **Professional Image Gallery** with Cloudinary integration

### 📱 **User Experience**
- **Responsive Design** with TailwindCSS
- **Interactive Booking System** with date selection
- **Real-time Toast Notifications** for feedback
- **Progressive Web App** capabilities
- **Mobile-first Design** approach

### 👥 **Admin Dashboard**
- **Trek Management** (Add/Edit/Delete destinations)
- **Booking Oversight** and management
- **Image Upload** with cloud storage
- **Analytics Dashboard** (coming soon)
- **User Management** capabilities

### 💳 **Payment Integration** *(Coming Soon)*
- **Razorpay Integration** for secure payments
- **Multiple Payment Methods** (UPI, Cards, Wallets)
- **Booking Confirmation** with receipt generation
- **Refund Management** system

---

## 🛠️ **Technology Stack**

### **Frontend** 
```
⚛️  React 19.1.0 + Vite 6.3.5
🎨  TailwindCSS 3.4.17 + PostCSS
🔄  Redux Toolkit 2.8.2
🧭  React Router DOM 7.6.2
📱  React Toastify 11.0.5
🔍  Axios 1.9.0
🎯  Lucide React Icons
```

### **Backend**
```
🚀  Node.js + Express.js 5.1.0
🗄️  MongoDB + Mongoose 8.15.1
🔐  JSON Web Tokens 9.0.2
☁️  Cloudinary + Multer Storage
🍪  Cookie Parser 1.4.7
🌐  CORS 2.8.5
⚙️  Environment Variables (dotenv)
```

### **Database Schema**
```javascript
User: { name, contactNumber, email, password, salt, role }
Destination: { name, location, images[], dates[], price, description }
Booking: { userId, destinationId, dateSlot, paymentStatus, orderId }
```

---

## 🏗️ **Project Architecture**

```
NisargPath/
├── 📁 Backend/
│   ├── 🎮 Controllers/          # Request handlers
│   │   ├── userHandler.js       # Authentication logic
│   │   ├── destinationHandler.js# Trek management
│   │   ├── bookHandler.js       # Booking system
│   │   └── connection.js        # Database connection
│   ├── 🛡️ Middlewares/         # Authentication guards
│   │   ├── authentication.js    # JWT verification
│   │   └── adminAuth.js         # Admin-only routes
│   ├── 📊 Models/              # Database schemas
│   │   ├── user.js             # User model with auth
│   │   ├── destination.js      # Trek destinations
│   │   └── booking.js          # Booking records
│   ├── 🛣️ Route/               # API endpoints
│   │   ├── user.js             # Auth routes
│   │   ├── destination.js      # Trek routes
│   │   └── book.js             # Booking routes
│   ├── 🔧 Services/            # Business logic
│   │   └── authentication.js   # JWT utilities
│   └── 🛠️ Utils/               # Helper functions
│       └── cloudConfig.js      # Cloudinary setup
└── 📁 frontend/
    ├── 🎨 src/components/       # React components
    │   ├── Header.jsx          # Navigation
    │   ├── Hero.jsx            # Landing section
    │   ├── Destinations.jsx    # Trek listings
    │   ├── BookingForm.jsx     # Booking interface
    │   ├── AdminPanel.jsx      # Admin dashboard
    │   └── ...                 # More components
    ├── 🏪 src/App/             # State management
    │   └── store.js            # Redux store
    └── 🎯 src/Features/        # Redux slices
        └── roleSlice.js        # User role management
```

---

## 🚀 **Quick Start Guide**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/Sarish05/NisargPath.git
cd NisargPath
```

### **2. Backend Setup**
```bash
cd Backend
npm install
```

Create `.env` file:
```env
dbURL=mongodb://127.0.0.1:27017/nisargPath
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```

Start backend server:
```bash
npm run dev  # Development with nodemon
# or
npm start    # Production
```

### **3. Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

### **4. Access the Application**
- 🌐 **Frontend**: `http://localhost:5173`
- 🔧 **Backend API**: `http://localhost:5001`

---

## 📚 **API Documentation**

### **Authentication Endpoints**
```http
POST /user/signup        # Register new user
POST /user/signin        # User login
POST /gettokendetails    # Verify JWT token
```

### **Destination Endpoints**
```http
GET  /destinations/all             # Get all treks
GET  /destinations/recent          # Get latest 6 treks
POST /destinations/adddestn        # Add new trek (Admin)
POST /destinations/updatedestn/:id # Update trek (Admin)
DELETE /destinations/deletedestn/:id # Delete trek (Admin)
```

### **Booking Endpoints**
```http
POST /booking            # Create new booking (Auth required)
```

### **Request/Response Examples**

**User Registration:**
```json
POST /user/signup
{
  "name": "Adventure Seeker",
  "contactNumber": "9876543210",
  "password": "securePass123",
  "email": "adventure@example.com"
}
```

**Trek Creation:**
```json
POST /destinations/adddestn
{
  "name": "Roopkund Trek",
  "location": "Uttarakhand, India", 
  "description": "Mystery lake trek...",
  "price": 15999,
  "duration": "8 Days 7 Nights",
  "transportMode": "Tempo Traveller",
  "dates": [
    {"startDate": "2024-05-01", "endDate": "2024-05-08"}
  ],
  "images": [MultipartFile]
}
```

---

## 🎨 **UI/UX Highlights**

### **Design Philosophy**
- **Orange & Red Gradient** color scheme representing adventure and energy
- **Mobile-first Responsive** design for all screen sizes
- **Intuitive Navigation** with clear call-to-actions
- **Accessibility-focused** with proper ARIA labels

### **Key Components**
- 🏠 **Landing Page** with hero section and featured destinations
- 🔍 **Search & Filter** for easy trek discovery
- 📅 **Interactive Booking** with date picker and pricing
- 👨‍💼 **Admin Dashboard** for content management
- 📱 **Toast Notifications** for user feedback

---

## 🔒 **Security Features**

| Feature | Implementation |
|---------|---------------|
| **Password Security** | SHA-256 hashing with random salt |
| **JWT Authentication** | HTTP-only cookies with expiration |
| **CSRF Protection** | SameSite cookie attributes |
| **Input Validation** | Server-side validation for all inputs |
| **File Upload Security** | Cloudinary with format restrictions |
| **Admin Routes** | Role-based middleware protection |

---

## 💳 **Payment Integration (Upcoming)**

### **Razorpay Integration Features**
- 🏦 **Multiple Payment Methods**: UPI, Credit/Debit Cards, Net Banking, Wallets
- 🔐 **Secure Payment Gateway**: PCI DSS compliant transactions
- 📧 **Automated Receipts**: Email confirmations with booking details
- 💰 **Refund Management**: Easy cancellation and refund processing
- 📊 **Payment Analytics**: Transaction tracking and reporting

### **Booking Flow**
```
Select Trek → Choose Dates → Enter Details → 
Payment Gateway → Confirmation → Email Receipt
```

---

## 🌍 **Deployment Guide**

### **Environment Variables**
```env
# Database
dbURL=mongodb+srv://user:pass@cluster.mongodb.net/nisargPath

# Cloudinary
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key  
CLOUD_API_SECRET=your_api_secret

# Razorpay (Coming Soon)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# JWT
JWT_SECRET=your_super_secret_key
```

### **Production Deployment**
1. **Backend**: Deploy to Heroku, Railway, or AWS EC2
2. **Frontend**: Deploy to Vercel, Netlify, or AWS S3
3. **Database**: MongoDB Atlas for cloud database
4. **Images**: Cloudinary for media storage

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow React/Node.js best practices
- Write meaningful commit messages
- Add proper error handling
- Test your changes thoroughly
- Update documentation when needed

---

## 📞 **Support & Contact**

- 📧 **Email**: support@nisargpath.com

---

<div align="center">

## 🌟 **Star this repo if you found it helpful!**

**Built with ❤️ by the NisargPath Team**

*Connecting adventurers with nature's wonders across India*

---

[![GitHub stars](https://img.shields.io/github/stars/Sarish05/NisargPath?style=social)](https://github.com/Sarish05/NisargPath/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Sarish05/NisargPath?style=social)](https://github.com/Sarish05/NisargPath/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Sarish05/NisargPath)](https://github.com/Sarish05/NisargPath/issues)

</div>
