import { create } from "zustand";
import { devtools, combine, createJSONStorage, persist } from "zustand/middleware";

const intiialState = {
  nickName: "",
};
const name = "UserStore";

const useUserStore = create(
  devtools(
    persist(
      combine(intiialState, (set) => ({})),
      {
        name,
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name,
    },
  ),
);

export default useUserStore;
