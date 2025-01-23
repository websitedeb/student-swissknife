import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";

export function R({children}){
    return (
        <ChatBubble variant='received'>
            <ChatBubbleAvatar fallback='✨'/>
            <ChatBubbleMessage variant='received' className="bg-gray-900">
                {children}
            </ChatBubbleMessage>
        </ChatBubble>
    );
}