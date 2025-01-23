import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";

export function L(){
    return (
        <ChatBubble variant='received'>
            <ChatBubbleAvatar fallback='✨'/>
            <ChatBubbleMessage variant='received' className="bg-gray-900" isLoading/>
        </ChatBubble>
    );
}