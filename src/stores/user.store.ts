import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const intiialState = {
  email: null as string | null,
  nickName: "",
};

const name = "UserStore";

const useUserStore = create(
  devtools(
    combine(intiialState, (set) => ({
      setEmail: (email: string) => set({ email }),
      setNickName: (nickName: string) => set({ nickName }),
    })),
    {
      name,
    },
  ),
);

export default useUserStore;
