import "./App.css";
import { AppProvider } from "./Context/DogsContext";
import Search from "./Components/Search";
import Dogs from "./Components/Dogs";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Search />
        <Dogs />
      </div>
    </AppProvider>
  );
}

export default App;