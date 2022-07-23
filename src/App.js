import Filter from "./Components/Filter/Filter";
import Header from "./Components/Header/Header";
import Joblistings from "./Components/Joblistings/Joblistings";


function App() {
  return (
    <div className="App" style={{backgroundColor: "hsl(180, 52%, 96%)"}}>
      <Header/>
      <Filter/>
      <Joblistings/>
    </div>
  );
}

export default App;
