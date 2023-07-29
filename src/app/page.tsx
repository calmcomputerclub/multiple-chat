import AppBody from "@/components/AppBody";
import AppBottom from "@/components/AppBottom";
import Appbar from "@/components/Appbar";
import AuthRedirect from "@/components/AuthRedirect";
import Drawer from "@/components/Drawer";

const HomePage = () => {
  return (
    <AuthRedirect>
      <Appbar />
      <AppBody />
      <AppBottom />
      <Drawer />
    </AuthRedirect>
  );
};

export default HomePage;
