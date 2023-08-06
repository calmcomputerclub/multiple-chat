import { app } from "@/lib/firebase-app";
import useUserStore from "@/stores/user.store";
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

  return {
    login,
    register,
  };
};

const UserService = _userService();

export default UserService;
