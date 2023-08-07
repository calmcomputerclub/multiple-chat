import { client } from "@/lib/api-client";
import useChatStore from "@/stores/chat.store";
import { ChatRequest, ChatResponse } from "@/types";

const _chatService = () => {
  const sendChat = async (chat: ChatRequest) => {
    const res = await client("chats", {
      method: "POST",
      body: JSON.stringify(chat),
    });
    useChatStore.setState((state) => ({ chats: [...state.chats, chat] }));
  };

  const getChats = async () => {
    const res = await client("chats");
    const json = await res.json<ChatResponse[]>();
    useChatStore.setState({ chats: json });
  };

  return {
    sendChat,
    getChats,
  };
};

const ChatService = _chatService();

export default ChatService;
