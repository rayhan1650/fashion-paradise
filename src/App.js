import "./App.css";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Collections />
      <Footer />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
