import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalStartWindow = ({ room, players, name, setGameStart, game }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  console.log(players);
  let playerList;
  if (players) {
    playerList = players.map((player) => player.name);
    console.log(players, playerList);
  }
  if (name) {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          //backdrop="static"
          keyboard={false}
          size="sm"
          centered={true}
          // restoreFocus={false}
          autoFocus={true}
          backdrop={true}
          scrollable={false}
          dialogClassName="modal"
        >
          <div>
            <Modal.Header closeButton={false}>
              <Modal.Title as="h1">{`Welcom ${name} to room ${room} of my rendition of the Can's Stop Boardgame`}</Modal.Title>
            </Modal.Header>
            <Modal.Body as="p">
              {`Please press start once everyone is online`}
              <br /> {`Players: ${playerList}`}
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button
              className="modal__button"
              variant="primary"
              onClick={() => {
                handleClose();
                setGameStart();
                game();
              }}
            >
              Start
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else return <p></p>;
};

export default ModalStartWindow;
