import "./App.css";
import Collections from "./components/Collections/Collections";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Collections />
      <div style={{ height: 500 }}></div>
    </div>
  );
}

export default App;
