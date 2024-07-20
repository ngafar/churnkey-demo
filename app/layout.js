export const metadata = {
  title: "ChurnKey Demo",
  description: "ChurnKey Demo for Technical Support Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
