import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import Loading from "./components/page/Loading";
import Social from "./components/page/Social";

function App() {
  const [LoadingState, setLoading] = useState(true);

  useEffect(() => {
   
    
    setTimeout(()=>{
      setLoading(false)
    }, [3000])
  }, [])
  return (
    <div className="App">
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Social />
          <Navbar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
