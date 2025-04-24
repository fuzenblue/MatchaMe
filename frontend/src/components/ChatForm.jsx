import React, { useRef } from 'react'

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFromSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim()
        if (!userMessage) return

        inputRef.current.value = ""

        const newUserMessage = { role: "user", text: userMessage }

        setChatHistory((history) => [...history, newUserMessage])

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Typing..." }])
            generateBotResponse([...chatHistory, newUserMessage])
        }, 600)
    }

    return (
        <div className='mt-auto'>
            <form action="#" className="flex items-center border-t pt-2 gap-2 px-4 mb-3" onSubmit={handleFromSubmit}>
                <input ref={inputRef} type="text" placeholder="Type Here..." required className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none text-sm" />
                <button type="submit" className="material-symbols-rounded text-primary hover:text-secondary text-2xl">arrow_upward</button>
            </form>
        </div>
    )
}

export default ChatForm
