import "./globals.css";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className=" font-poppins min-h-screen ">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
