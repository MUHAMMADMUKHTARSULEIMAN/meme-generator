import Count from "./components/Count";
import data from "./data";

export default function App() {
  const boxes = data.map(box => (
    <Count
    key={box.id}
    {...box}
    />
  ));

  return(
    <div>
      {boxes}
    </div>
  );
}