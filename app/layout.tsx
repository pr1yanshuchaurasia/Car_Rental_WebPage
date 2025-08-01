import "./globals.css";
import {Footer , Navbar} from "@/components";


export const metadata = {
  title: "Prestige Wheels",
  description: "Discover world's best car in the world",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}