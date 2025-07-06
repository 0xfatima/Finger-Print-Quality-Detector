# 🧠 Fingerprint Quality Detector

This is a web-based application that allows users to upload fingerprint images and instantly get a quality analysis using two machine learning models — **CNN** and **SVM**. It is built using **Next.js** (frontend and API), and uses the **Gradio client** to interact with hosted ML models.

# Models

A detailed overview of models is provided in **MODELS.md** in this repository

## 🚀 Demo

👉 [Live Demo on Vercel](https://finger-print-quality-detector-b8p119q2c.vercel.app/)

---


## 📷 Features

- Upload a fingerprint image from your device.
- View predictions from two models:
  - ✅ **CNN Model:** Outputs a quality score (0 to 1).
  - ✅ **SVM Model:** Classifies as *Good* or *Bad*.
- Responsive UI with rotating gradient card.
- Toast notifications for success/failure.

---

## 🛠️ Tech Stack

| Tech | Use |
|------|-----|
| [Next.js](https://nextjs.org/) | Frontend + API |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [@gradio/client](https://github.com/gradio-app/gradio) | Model prediction |
| [react-toastify](https://fkhadra.github.io/react-toastify/introduction) | Notifications |
| [Vercel](https://vercel.com/) | Deployment |

- React.js is used for frontend
- Next.js is used as framework
- models are trained using jupyter notebooks (code is available in the repository)
- models are hosted on hugging face
- gradio is used to host models on hugging face 

---

## 📁 Project Structure

fingerprintquality/
├── public/
├── src/
│ └── app/
│ ├── api/predict/route.js // Server route for prediction
│ ├── detector/page.js // Main frontend component
│ ├── globals.css
│ └── layout.js
├── .gitignore
├── package.json
└── README.md


---

## ✨ How It Works

1. User uploads a fingerprint image.
2. The image is sent via a **POST** request to `/api/predict`.
3. Server-side code uses `@gradio/client` to connect to the hosted Gradio model.
4. Results from both **CNN** and **SVM** are returned and shown to the user.

---

## 🔧 Installation & Running Locally


- git clone https://github.com/your-username/Finger-Print-Quality-Detector.git
- cd fingerprintquality
- npm install
- npm run dev
- Visit: http://localhost:3000

## Future Improvements
Allow batch uploads.

Display confidence scores if available.

Integrate with a database to store results.

Add animation/visual feedback per model result.
