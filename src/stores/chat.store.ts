import { ChatRequest } from "@/types";
import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";

const intiialState = {
  chats: [] as ChatRequest[],
};
const name = "ChatStore";

const useChatStore = create(
  devtools(
    combine(intiialState, (set) => ({
      addChat: (chat: ChatRequest) => set((state) => ({ chats: [...state.chats, chat] })),
    })),
    { name },
  ),
);

export default useChatStore;
