# MatchaMe — Matcha Menu Recommender with AI Chatbot

**MatchaMe** คือเว็บไซต์ร้านมัทฉะที่ไม่ใช่แค่ขายเครื่องดื่ม แต่ยังมีระบบ AI Chatbot ที่ช่วยแนะนำเมนูตามรสชาติและความชอบของลูกค้าได้อย่างแม่นยำและเป็นมิตร

---

## website deploy
      (https://matchame.onrender.com)

## 📑 Presentation Slides

[🔗 MatchaMe Project Slides (Cnava)](https://www.canva.com/design/DAGlk_lK5gM/sWZaRa7JaJKYKI2MJSbK8g/edit?utm_content=DAGlk_lK5gM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## Features

- แสดงเมนูมัทฉะพร้อมภาพ รสชาติ และข้อมูลประกอบ
- หน้ารายละเอียดเมนูแบบเต็ม: ระดับความเข้ม, ตัวเลือกนม, ความหวาน
- ฟิลเตอร์แยกตามประเภทมัทฉะ (LATTE, PURE, SPARKLING, ONLY MATCHAME)
- AI Chatbot (Gemini API) ตอบคำถามเกี่ยวกับเมนูได้อย่างชาญฉลาด
- ตอบกลับทันทีจากฝั่ง frontend หากเป็นคำถามเบื้องต้น เช่น ความหวาน, greeting

---

## Tech Stack

| Frontend        | Backend / API    | AI / NLP         |
|-----------------|------------------|------------------|
| React.js        | Node.js (proxy)  | Gemini API       |
| Tailwind CSS    | Express (optional) | Prompt-based Chatbot |
| DaisyUI         |                  |                  |

---

## Environment Setup
   สร้าง .env แล้วเพิ่ม
   
  ```VITE_API_URL=http://localhost:5000/api/gemini```
  
  - ต้องตั้งค่า backend proxy สำหรับ Gemini ด้วย (Node/Express หรือ Cloud Function)

---

## Getting Started

```bash
git clone https://github.com/your-username/matchame.git
cd matchame/frontend
npm install
npm run dev


