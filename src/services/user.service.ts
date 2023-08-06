import { app } from "@/lib/firebase-app";
import useUserStore from "@/stores/user.store";
import { generateRandomString } from "@/utils/rand";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const _userService = () => {
  const login = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    useUserStore.setState({ email: credential.user.email });
  };
  const register = async (email: string, password: string) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    useUserStore.setState({ email: credential.user.email });
  };

  const createNickName = () => {
    const randName = generateRandomString();
    useUserStore.setState({ nickName: randName });
  };

  return {
    login,
    register,
    createNickName,
  };
};

const UserService = _userService();

export default UserService;
