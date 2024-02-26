import React from "react";
import { Box, Typography } from "@mui/material";
import alertImg from "../../assets/pop-up_error.svg";
import successImg from "../../assets/pop-up_Ok.svg";


const ModalMsg = ({ typeModal, textModal }) => {
  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: typeModal === "success" ? "#0082e5" : "#ef3248",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          placeContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            padding: "10px 5px 20px 5px",
          }}
        >
          <img
            src={typeModal === "success" ? successImg : alertImg}
            alt="Error"
            style={{ width: "20%", margin: "0 auto" }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#ffffff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { md: "1rem", xs: "0.8rem" },
          }}
        >
          {textModal}
        </Typography>
      </Box>
    </Box>
  );
};
export default ModalMsg;
