import Navbar from "../Components/navbar";
import UnderNav from "../Components/underNav.js";
import OurPizzas from "../Components/ourPizzas";
import Footer from "../Components/footer.js";
import FooterLinks from "../Components/footerLinks";
function Home() {
  return (
    <div>
      <Navbar />
      <UnderNav />
      <OurPizzas />
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default Home;
