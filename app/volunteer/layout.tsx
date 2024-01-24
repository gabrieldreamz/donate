import MainNavigation from "@components/routes/main-navigation/MainNavigation";
import Footer from "@shared/Footer";

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
}
