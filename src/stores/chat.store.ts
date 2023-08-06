import { Chat } from "@/types";
import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";

const intiialState = {
  chats: [] as Chat[],
};
const name = "ChatStore";

const useChatStore = create(
  devtools(
    combine(intiialState, (set) => ({
      addChat: (chat: Chat) => set((state) => ({ chats: [...state.chats, chat] })),
    })),
    { name },
  ),
);

export default useChatStore;
