import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
