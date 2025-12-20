# Midnight Sun Cafe - Full Stack Menu Application

A modern full-stack web application for Midnight Sun Cafe featuring a Django REST API backend and React frontend with an interactive menu modal.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Contributing](#contributing)

## ✨ Features

- Interactive menu modal with category navigation
- RESTful API for product management
- Responsive design with Tailwind CSS
- Category-based menu organization
- Product detail views
- CORS-enabled API for seamless frontend-backend communication

## 🛠 Tech Stack

### Backend

- **Python 3.13**
- **Django 5.2.4** - Web framework
- **Django REST Framework** - API development
- **django-cors-headers** - CORS policy management

### Frontend

- **React** - UI library
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📁 Project Structure

```
q1/
├── backend/
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py       # Django settings with CORS config
│   │   ├── urls.py            # Main URL configuration
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── products/
│   │   ├── views.py           # API view functions
│   │   ├── urls.py            # Products URL patterns
│   │   └── models.py
│   ├── base/
│   │   ├── __init__.py
│   │   └── products.py        # Product data
│   ├── manage.py
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── images/            # Product images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   ├── MenuModal.jsx  # Menu display component
│   │   │   └── ...
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
└── README.md
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.13** or higher - [Download Python](https://www.python.org/downloads/)
- **Node.js 16+** and **npm** - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd q1
```

### 2. Backend Setup

#### Create Virtual Environment

**Windows:**

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

#### Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### Run Database Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

#### Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### 3. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
```

## 🏃 Running the Application

### Start Backend Server

**Terminal 1:**

```powershell
cd backend
.\venv\Scripts\Activate.ps1  # Windows
# source venv/bin/activate    # macOS/Linux
python manage.py runserver
```

The Django backend will run on `http://127.0.0.1:8000/`

### Start Frontend Server

**Terminal 2:**

```bash
cd frontend
npm start
```

The React frontend will run on `http://localhost:3000/`

### Access the Application

- **Frontend**: Open your browser and navigate to `http://localhost:3000`
- **Backend API**: `http://127.0.0.1:8000/api/`
- **Django Admin**: `http://127.0.0.1:8000/admin/` (use superuser credentials)

## 🔌 API Endpoints

### Base URL: `http://127.0.0.1:8000/api/`

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/`              | List all available API routes |
| GET    | `/products/`     | Get all products              |
| GET    | `/products/<id>` | Get single product by ID      |

### Example Response

**GET /api/products/**

```json
[
  {
    "_id": "1",
    "name": "Cheesy Ham Melt",
    "image": "/images/cheesyham.jpg",
    "description": "Delicious ham and cheese sandwich",
    "category": "Sandwiches",
    "price": 8.99,
    "countInStock": 10,
    "rating": 4.5,
    "numReviews": 12
  }
]
```

## 🔧 Development

### Backend Development

#### Settings Configuration

The backend is configured in `backend/backend/settings.py`:

- **CORS Origins**: Allows requests from `http://localhost:3000`
- **Installed Apps**: Includes `corsheaders`, `rest_framework`, `products`
- **Middleware**: CORS middleware at the top of the stack

#### Creating New Endpoints

1. Add view function in `products/views.py`
2. Add URL pattern in `products/urls.py`
3. Test with `http://127.0.0.1:8000/api/your-endpoint`

### Frontend Development

#### Proxy Configuration

The frontend is configured to proxy API requests:

```json
// frontend/package.json
{
  "proxy": "http://127.0.0.1:8000"
}
```

This allows axios to make requests to `/api/` instead of the full URL.

#### Components

- **Header.jsx**: Navigation with menu trigger
- **MenuModal.jsx**: Full menu display with category cards and detail view

### Environment Variables

Create a `.env` file in the backend directory (optional):

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
python manage.py test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 📝 Common Issues

### CORS Errors

If you encounter CORS errors:

1. Verify `django-cors-headers` is installed
2. Check `CORS_ALLOWED_ORIGINS` in `settings.py`
3. Ensure CORS middleware is at the top of `MIDDLEWARE` list

### Port Already in Use

If port 8000 or 3000 is already in use:

**Backend:**

```bash
python manage.py runserver 8001
```

**Frontend:**

```bash
PORT=3001 npm start  # macOS/Linux
$env:PORT=3001; npm start  # Windows PowerShell
```

### Module Not Found

If you get "Module not found" errors:

**Backend:**

```bash
pip install -r requirements.txt
```

**Frontend:**

```bash
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Django Documentation
- React Documentation
- Tailwind CSS
- Django REST Framework

---

**Made with ❤️ for Midnight Sun Cafe**
