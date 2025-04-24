import React from 'react';
import ChatIcon from './ChatIcon';

const ChatMessage = ({ chat }) => {

    const parseLinks = (text) => {
        return text.split(/(\/product\/\w+)/g).map((chunk, i) => {
          if (chunk.startsWith('/product/')) {
            return <Link key={i} to={chunk} className="text-blue-600 underline">{chunk}</Link>
          }
          return <span key={i}>{chunk}</span>
        })
      }
      
    return (
        !chat.hideInChat && (
            <>
                {chat.role === 'model' ? (
                    // Bot Message
                    <div className={`chat chat-start ${chat.isError ? 'error' : ''}`}>
                        <div className="chat-image mr-2">
                            <ChatIcon />
                        </div>
                        <div className={`chat-bubble ${chat.isError ? 'bg-error text-white' : 'bg-base text-black'} bg-base rounded-xl px-4 py-2 max-w-xs`}>
                            <p className="text-sm leading-snug whitespace-pre-line">
                                {parseLinks(chat.text)}
                            </p>
                        </div>
                    </div>
                ) : (
                    // User Message
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-primary text-white rounded-xl px-4 py-2 max-w-xs">
                            <p className="text-sm leading-snug whitespace-pre-line">
                                {chat.text}
                            </p>
                        </div>
                    </div>
                )}
            </>
        )
    )
}

export default ChatMessage