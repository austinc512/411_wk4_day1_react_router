import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Car = (props) => {
  const params = useParams();

  const car = cars.find((car) => car.id === +params.id);

  let chips = [];
  for (let property in car) {
    if (property === "Name") {
      let nameArr = car[property].split(" ");
      nameArr.forEach((element, index, arr) => {
        arr[index] = element[0].toUpperCase() + element.slice(1);
      });
      chips.push(
        <Chip key={property} label={`${property}: ${nameArr.join(" ")}`} />
      );
    } else {
      chips.push(
        <Chip key={property} label={`${property}: ${car[property]}`} />
      );
    }
  }

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ paddingTop: 10 }}>
          <Box>
            <Paper elevation={4} sx={{ padding: "35px" }}>
              <h1>{car.Name}</h1>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "inline",
                  padding: 1,
                }}
              >
                {chips}
              </Stack>
            </Paper>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Car;
