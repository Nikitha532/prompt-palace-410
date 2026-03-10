import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";
import type { ChatMessage } from "@/lib/chat-stream";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser ? "bg-primary" : "bg-secondary"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Bot className="h-4 w-4 text-secondary-foreground" />
        )}
      </div>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-chat-user text-chat-user-foreground"
            : "bg-chat-ai text-chat-ai-foreground shadow-sm border border-border"
        }`}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none prose-headings:text-chat-ai-foreground prose-p:text-chat-ai-foreground prose-strong:text-chat-ai-foreground prose-code:font-mono prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
