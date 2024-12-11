import HomeContainer from "@/components/HomeContainer/Home";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Home = () => {
  return (
    <>
      <ThemeSwitcher/>
      <HomeContainer />
    </>
  );
};

export default Home;
