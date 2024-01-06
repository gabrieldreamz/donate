import MainNavigation from "@components/routes/main-navigation/MainNavigation";
import Footer from "@shared/Footer";

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNavigation />
      {children}
      <Footer />
    </div>
  );
}
