import useChatStore from "@/stores/chat.store";
import { Chat } from "@/types";

const _chatService = () => {
  const addChat = async (chat: Chat) => {
    // TODO: await POST req
    useChatStore.setState((state) => ({ chats: [...state.chats, chat] }));
  };

  return {
    addChat,
  };
};

const ChatService = _chatService();

export default ChatService;
