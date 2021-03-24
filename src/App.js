import "./App.css";
import MyHeader from "./components/MyHeader";
import Section from "./components/Section";
import Welcome from "./components/Welcome";
import ImageBox from "./components/ImageBox"

function App() {

  // test

  const log = () => {
    console.log('Hello World');
  }

  
  return (
    <div className="App">
      <MyHeader />
      <Welcome name={'Super-Code'} age={24} />

      <Section center={true} reverse={true}>
        <ImageBox imageSize={'300'} />
        <ImageBox content={'SPECIAL CAPTION'} />
        <ImageBox />
      </Section>

      <button onClick={log}>Click me!</button>
    </div>
  );
}

export default App;
