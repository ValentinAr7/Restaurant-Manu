import React, { useState } from "react";
import { Button } from "@mui/material";
import { LocalOffer, ExitToApp } from "@mui/icons-material";
import styles from "./manager.module.css";
import Reservations from "../AccountMenu/Reservations";

const Manager = ({ onClose }) => {
  const [reservation, setReservation] = useState(false);

  const handleExitButton = () => {
    localStorage.removeItem("token");
  };

  const handleReservationClick = () => {
    setReservation(true);
  };

  return (
    <div>
      {!reservation ? (
        <div className={styles.container}>
          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={<LocalOffer className={styles.icon} />}
            onClick={handleReservationClick}
          >
            Резервация
          </Button>

          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={<ExitToApp className={styles.icon} />}
            onClick={() => {
              handleExitButton();
              onClose();
            }}
          >
            Изход
          </Button>
        </div>
      ) : null}

      {reservation && <Reservations />}
    </div>
  );
};

export default Manager;
