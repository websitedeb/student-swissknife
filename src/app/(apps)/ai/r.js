import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatBubbleAction } from "@/components/ui/chat/chat-bubble";
import { useState } from "react";

export function R({children, cop=""}){
    const [copy, setCopy] = useState("bi bi-clipboard");

    function copying(){
        setCopy("bi bi-clipboard-check");
        setTimeout(() => {
            setCopy("bi bi-clipboard");
        }, 3000);
    }

    return (
        <ChatBubble variant='received'>
            <ChatBubbleAvatar fallback='✨'/>
            <ChatBubbleMessage variant='received' className="bg-gray-900">
                {children}
                <br/>
                <ChatBubbleAction
                  className="size-8"
                  key="Copy"
                  icon={<i className={copy}></i>}
                  onClick={() => {
                    navigator.clipboard.writeText(cop).then(() => copying());
                  }}
                />
            </ChatBubbleMessage>
        </ChatBubble>
    );
}