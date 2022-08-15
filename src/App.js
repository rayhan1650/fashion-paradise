import "./App.css";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
