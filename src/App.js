import Background from "./components/background/Background";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";

//styles
import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("click submit button");
  };

  return (
    <div className="App">
      <Background />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
