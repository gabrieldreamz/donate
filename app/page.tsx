import HomeComponent from "@components/home/HomeComponent";
import MainNavigation from "@components/routes/main-navigation/MainNavigation";
import Footer from "@shared/Footer";

export default function Home() {
  return (
    <div>
      <MainNavigation />
      <HomeComponent />
      <Footer />
    </div>
  );
}
