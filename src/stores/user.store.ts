import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const intiialState = {
  email: null as string | null,
};
const name = "UserStore";

const useUserStore = create(
  devtools(
    combine(intiialState, (set) => ({
      setEmail: (email: string) => set({ email }),
    })),
    {
      name,
    },
  ),
);

export default useUserStore;
