import React from 'react';
import ChatIcon from './ChatIcon';

const ChatMessage = ({ chat }) => {
      
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
                                {chat.text}
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