import { FirstExample } from "./components/first-example";
import { FourExample } from "./components/four-example";
import { SecondExample } from "./components/second-example";
import { ThirdExample } from "./components/third-example";

function App() {
  return (
    <>
      <FourExample />
      <hr style={{ margin: "3em 0 3em 0" }} />
      <FirstExample />
      <hr style={{ margin: "3em 0 3em 0" }} />
      <SecondExample />
      <hr style={{ margin: "3em 0 3em 0" }} />
      <ThirdExample />
    </>
  );
}

export default App;
