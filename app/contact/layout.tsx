import MainNavigation from "@components/routes/main-navigation/MainNavigation";
import Footer from "@shared/Footer";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNavigation />
      {children}
    </div>
  );
}
