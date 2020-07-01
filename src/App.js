import React, { useState } from "react";

import Icon from "./Components/Icon";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//reactstrap
import { Card, CardBody, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  //States
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  // const [colorback, setcolorBack] = useState();
  console.log(winMessage);

  // useEffect(() => {
  //   if (winMessage === "") {
  //     setcolorBack("black");
  //   }
  // }, [winMessage]);

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
      // console.log(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
      // console.log(`${itemArray[0]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
      // console.log(`${itemArray[0]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
      // console.log(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
      // console.log(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
      // console.log(itemArray[2]);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
      // console.log(itemArray[0]);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
      // console.log(itemArray[2]);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("DRAW! :)");
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage !== "") {
      // if (winMessage === "circle won") {
      //   setcolorBack("red");
      //   console.log("HELLO CIRCLE");
      // }
      // if (winMessage === "cross won") {
      //   setcolorBack("black");
      // }
      // if (winMessage === "DRAW! :)") {
      //   setcolorBack("black");
      // }
      return toast(winMessage, { type: "success", position: "top-right" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error", position: "top-right" });
    }
    checkIsWinner();
  };

  return (
    <div>
      <div className="p-5">
        <ToastContainer position="bottom-center" />
        <h1 class="text-center text-info pt-5 mb-5">
          Made with Love by Aman Tyagi &copy; Aman tyagi
        </h1>
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-warning text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="warning" block onClick={reloadGame}>
                  Reload the Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "cross" : "circle"} turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card
                  onClick={() => {
                    changeItem(index);
                  }}
                  color="danger"
                  key={index}
                >
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
