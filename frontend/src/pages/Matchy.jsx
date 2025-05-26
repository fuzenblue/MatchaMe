import React, { useEffect, useRef, useState } from 'react'
import ChatIcon from '../components/ChatIcon.jsx'
import ChatForm from '../components/ChatForm.jsx'
import ChatMessage from '../components/ChatMessage.jsx'
import menu from '../assets/menu.json'

const Matchy = () => {

    const [chatHistory, setChatHistory] = useState([])
    const [showChatbot, setShowChatbot] = useState(false)
    const chatBodyRef = useRef()

    const generateBotResponse = async (history) => {

        const updateHistory = (text, isError = false) => {

            setChatHistory(prev => [
                ...prev.filter(msg => msg.text !== "Typing..."),
                { role: "model", text, isError }
            ])
        }

        const userInput = history[history.length - 1]?.text.toLowerCase()
        const greetings = ["สวัสดี", "hello", "hi", "หวัดดี"]
        const sweetness = ["ระดับความหวาน", "หวานมากไหม"]
        const matcha_level = ["เข้มเท่าไหร่", "เข้มมากไหม", "ระดับความเข้ม"]

        if (userInput.includes("ไม่มีนม") || userInput.includes("ไม่เอานม")) {
            updateHistory("เมนูประเภท PURE หรือ SPARKLING ไม่มีส่วนผสมนมค่ะ ลองดูเมนู UJI SAMIDORI หรือ YAME TSUYUHIKARI ได้นะคะ")
            return
        }

        if (greetings.some(w => userInput.includes(w))) {
            updateHistory("สวัสดีค่ะ ยินดีต้อนรับสู่ร้านมัทฉะ MatchaMe ค่ะ")
            updateHistory("วันนี้ให้น้อง Matchy ช่วยอะไรดีคะ ?")
            return
        }
        if (sweetness.some(w => userInput.includes(w))) {
            updateHistory("ระดับความหวานมีให้เลือก 0%, 25%, 50%, 75% และ 100% ค่ะ")
            return
        }

        if (matcha_level.some(w => userInput.includes(w))) {
            updateHistory("ระดับ MEDIUM	จะเท่ากับกาแฟใส่นม 1 แก้ว")
            updateHistory("ระดับ STRONG และ VERY STRONG จะเกือบเท่ากับกาแฟใส่นม 2 แก้ว ค่ะ")
            return
        }

        const systemPrompt = `
        คุณคือแชทบอทของร้านมัทฉะ MatchaMe ชื่อ Matchy
        ตอบคำถามเกี่ยวกับเมนูจาก JSON นี้เท่านั้น:
  
        ${JSON.stringify(menu.map(m => ({
            name: m.name,
            type: m.type,
            matcha_strength_level: m.matcha_strength_level,
            tasting_notes: m.tasting_notes,
            tasting_notes_th: m.tasting_notes_th,
            milk_option: m.milk_option,

        })), null, 2)}

        หากลูกค้าถามถถึงเมนูใด แล้วมีเมนูที่เข้าข่ายถูกต้องหลายเมนูให้ตอบไปแค่เมนูเดียวที่ใกล้เคียงกับความต้องการมากที่สุด

        ให้ตอบสั้น กระชับ เฉพาะข้อมูลที่เกี่ยวข้องเท่านั้น ให้มีความเป็นมิตรกับลูกค้า ไม่ต้องใส่อิโมจิ
        หากไม่มีข้อมูลที่ตรง ให้ตอบว่า “ไม่มีข้อมูลในขณะนี้ค่ะ”

        ถ้าถามในสิ่งที่ไม่เกี่ยวข้องกับสินค้า หรือเมนู ให้ตอบว่า “ต้องขออภัยด้วยค่ะ น้อง Matchy เป็นแชทบอทของร้าน MatchaMe ที่จะช่วยตอบคำถามในการค้นหาเมนูตามความชอบของคุณลูกค้าเท่านั้น ไม่สามามารถตอบคำถามอื่นที่ไม่เกี่ยวข้องได้ค่ะ”

      `
        const formattedHistory = [
            {
                role: "user",
                parts: [{ text: systemPrompt }]
            },
            ...history.map(({ role, text }) => ({
                role: role === "model" ? "model" : "user",
                parts: [{ text }]
            }))
        ]

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: formattedHistory })
            })

            const data = await response.json()
            if (!response.ok) throw new Error(data.error?.message || "Something went wrong!")
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()

            updateHistory(apiResponseText)
        } catch (error) {
            updateHistory("ขออภัยค่ะ มีการใช้งานเยอะเกินไปในขณะนี้ กรุณาลองใหม่อีกครั้งภายหลังนะคะ", true)
        }
    }

    useEffect(() => {
        chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }, [chatHistory])

    return (
        <div className={`flex flex-col ${showChatbot ? 'show-chatbot' : ''}`}>
            <button
                onClick={() => setShowChatbot(prev => !prev)}
                className={`fixed flex text-center items-center justify-center bottom-8 right-4 bg-primary text-white pt-4 px-3 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl shadow-lg z-50
            ${showChatbot ? 'hidden ' : ''}
        `}
            >
                <span className="material-symbols-rounded w-10 h-10">
                    {showChatbot ? 'close' : 'mode_comment'}
                </span>
            </button>

            {showChatbot && (
                <div className="fixed z-50 w-full h-full md:w-96 md:h-6/7 md:bottom-6 md:right-6 bg-white rounded-none md:rounded-xl shadow-xl">
                    <div className="chatbot-popup bg-white rounded-xl shadow-xl h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between bg-primary text-white p-3 rounded-md mb-2">
                            <div className="flex items-center gap-3">
                                <ChatIcon />
                                <h1 className="text-lg font-semibold">MATCHY AI Chatbot</h1>
                            </div>
                            <button onClick={() => setShowChatbot(false)} className="material-symbols-rounded">
                                keyboard_arrow_down
                            </button>
                        </div>

                        {/* Body */}
                        <div ref={chatBodyRef} className="flex flex-col gap-3 mb-4 px-6 overflow-y-auto max-h-[400px]">
                            {/* Bot Message */}
                            <div className="chat chat-start">
                                <div className='chat-image mr-2'>
                                    <ChatIcon />
                                </div>
                                <div className="chat-bubble bg-base text-black rounded-xl px-4 py-2">
                                    <p className="text-sm leading-snug">
                                        สวัสดีค่ะ <br />
                                        ยินดีต้อนรับสู่ร้าน MatchaMe ค่ะ
                                    </p>
                                </div>
                            </div>

                            {/* Message List */}
                            {chatHistory.map((chat, index) => (
                                <ChatMessage key={index} chat={chat} />
                            ))}
                        </div>

                        {/* Footer */}
                        <ChatForm
                            chatHistory={chatHistory}
                            setChatHistory={setChatHistory}
                            generateBotResponse={generateBotResponse}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Matchy