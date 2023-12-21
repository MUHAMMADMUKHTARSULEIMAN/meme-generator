import { useState } from "react";
import BoxToggle from "./box-toggle";
import data from "./data";

export default function BoxToggle2() {
  const [squares, setSquares] = useState(data);
  const messages = ["a", "b"];

  function toggle(id) {
    // const newSquares = [];
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, on: !square.on} : square;
      })
  //     for(let i  = 0; i < prevSquares.length; i++) {
  //       const currentSquare = prevSquares[i]
  //       if(currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on
  //         };
  //         newSquares.push(updatedSquare);
  //       }
  //       else {
  //         newSquares.push(currentSquare);
  //       }
  //     }
  //     return newSquares;
    })
  }
  const boxes = squares.map(box => (
    <BoxToggle
    toggle={toggle}
    key={box.id}
    {...box}
    />
  ));

  return(
    <div>
      {boxes}
      {messages.length !== 0 && <p>You have {messages.length} unread messages.</p>}
    </div>
  );
}