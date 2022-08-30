import "./App.css";
import Loading from "./component/loadingScreen/loading.component";
import { useState } from "react";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  const [redirect, setRedirect] = useState(true);

  setTimeout(() => {
    setRedirect(false);
  }, 7000);

  return <div className="App">{redirect ? <Loading /> : <Navigation />}</div>;
}

export default App;
