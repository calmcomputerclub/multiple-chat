import AppBody from "@/components/AppBody";
import AppBottom from "@/components/AppBottom";
import Appbar from "@/components/Appbar";
import Drawer from "@/components/Drawer";
import SplashScreen from "@/components/SplashScreen";

const HomePage = () => {
  return (
    <SplashScreen>
      <Appbar />
      <AppBody />
      <AppBottom />
      <Drawer />
    </SplashScreen>
  );
};

export default HomePage;
