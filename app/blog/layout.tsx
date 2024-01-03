import MainNavigation from "@components/routes/main-navigation/MainNavigation";

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
