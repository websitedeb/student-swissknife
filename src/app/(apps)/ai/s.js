import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";

export function S({children}){
    return (
        <ChatBubble variant='sent'>
            <ChatBubbleAvatar fallback='User'/>
            <ChatBubbleMessage variant='sent' className="bg-gray-900">
                {children}
            </ChatBubbleMessage>
        </ChatBubble>
    );
}