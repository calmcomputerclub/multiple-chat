import { create } from "zustand";
import { combine, devtools, createJSONStorage, persist } from "zustand/middleware";

const intiialState = {
  email: null as string | null,
  nickName: "",
};

const name = "UserStore";

const useUserStore = create(
  devtools(
    persist(
      combine(intiialState, (set) => ({
        setEmail: (email: string) => set({ email }),
        setNickName: (nickName: string) => set({ nickName }),
      })),
      {
        name,
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name,
    },
  ),
);

export default useUserStore;
