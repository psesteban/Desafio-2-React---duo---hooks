import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
library.add(fab);

function App() {
  const [error, setError] = useState("");

  return (
    <>
      <Registro />
    </>
  );
}

export default App;
