import AppBody from "@/components/AppBody";
import AppBottom from "@/components/AppBottom";
import Appbar from "@/components/Appbar";
import Drawer from "@/components/Drawer";

const HomePage = () => {
  return (
    <>
      <Appbar />
      <AppBody />
      <AppBottom />
      <Drawer />
    </>
  );
};

export default HomePage;
