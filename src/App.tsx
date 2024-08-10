import NavBar from "@/pages/navbar";
import Home from "@/pages/home";
import Benefits from "@/pages/benefits";
import { useEffect, useState } from "react";
import { Selected } from "@/shared/types";
import OurClaases from "./pages/ourClasses";
import ContactUs from "./pages/contactUs";
import Footer from "./pages/footer";

const App = () => {
  const [selected, setSelectedPage] = useState<Selected>(Selected.Home);
  const [isTopOfThePage, setTopOfThePage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfThePage(true);
        setSelectedPage(Selected.Home);
      }
      if (window.scrollY !== 0) setTopOfThePage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfThePage={isTopOfThePage}
        selected={selected}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClaases setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
