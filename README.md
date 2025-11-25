# 🍵 MatchaMe — Matcha Menu Recommender with AI Chatbot

**MatchaMe** คือเว็บไซต์ร้านมัทฉะที่ไม่ใช่แค่ขายเครื่องดื่ม แต่ยังมีระบบ AI Chatbot ที่ช่วยแนะนำเมนูตามรสชาติและความชอบของลูกค้าได้อย่างแม่นยำและเป็นมิตร

## 🌐 Live Demo
- **Website**: [MatchaMe (Render.com)](https://matchame.onrender.com)
- **Presentation**: [Project Slides (Canva)](https://www.canva.com/design/DAGlk_lK5gM/sWZaRa7JaJKYKI2MJSbK8g/edit?utm_content=DAGlk_lK5gM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## ✨ Features

- 🍃 **เมนูมัทฉะครบครัน** - แสดงเมนูพร้อมภาพ รสชาติ และข้อมูลประกอบ
- 📋 **รายละเอียดเมนูแบบเต็ม** - ระดับความเข้ม, ตัวเลือกนม, ความหวาน
- 🔍 **ฟิลเตอร์ตามประเภท** - LATTE, PURE, SPARKLING, ONLY MATCHAME
- 🤖 **AI Chatbot** - ใช้ Gemini API ตอบคำถามเกี่ยวกับเมนูได้อย่างชาญฉลาด
- ⚡ **ตอบกลับทันที** - ระบบตอบคำถามเบื้องต้นจาก frontend (ความหวาน, การทักทาย)

## 🛠️ Tech Stack

| Frontend        | Backend / API    | AI / NLP         | Deployment      |
|-----------------|------------------|------------------|------------------|
| React.js        | Node.js (proxy)  | Gemini API       | Render.com      |
| Tailwind CSS    | Express          | Prompt Engineering| Vite            |
| DaisyUI         | CORS Proxy       | Context-aware Bot| GitHub          |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 หรือสูงกว่า)
- npm หรือ yarn
- Gemini API Key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/matchame.git
cd MatchaMe
```

2. **Setup Frontend**
```bash
cd frontend
npm install
```

3. **Environment Configuration**
   สร้างไฟล์ `.env` ใน folder `frontend/` และเพิ่ม:
```env
VITE_API_URL=http://localhost:5000/api/gemini
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Run Development Server**
```bash
npm run dev
```

5. **Setup Backend Proxy** (ถ้าจำเป็น)
   - ตั้งค่า Node.js/Express server สำหรับ proxy Gemini API
   - หรือใช้ Cloud Function สำหรับ production

## 📁 Project Structure

```
MatchaMe/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images, icons
│   │   └── App.jsx        # Main app component
│   ├── public/            # Static files
│   ├── .env              # Environment variables
│   └── package.json      # Dependencies
└── README.md
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Made with ❤️ for Matcha lovers**
