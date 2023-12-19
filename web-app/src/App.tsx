import Circle from "./Components/Circle";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout />
      <div className="flex flex-col items-center justify-center dark:bg-black dark:text-white">
        <Circle CircleColor={"Tomato"}></Circle>
      </div>
    </>
  );
}

export default App;
