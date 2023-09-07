import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";

// import MUI components here //
// Container, Paper, Chip //

// import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Car = (props) => {
  const params = useParams();
  //   console.log(params.id, typeof params.id);

  const car = cars.find((car) => car.id === +params.id);
  //   console.log(car);

  //   let newName = car.Name.split(" ").forEach((element, index, arr) => {
  //     arr[index] = element[0].toUpperCase() + element.slice(1);
  //   });
  //   newName = newName.join(" ");

  let chips = [];
  for (let property in car) {
    chips.push(<Chip key={property} label={`${property}: ${car[property]}`} />);
    // console.log(property);
  }

  return (
    <>
      {/* <h1>A specific car with an Id of {params.id}</h1> */}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ paddingTop: 10 }}>
          <Box
          // sx={{
          //   //   display: "block",
          //   //   flexWrap: "wrap",
          //   height: "500px",
          //   "& > :not(style)": {
          //     m: 1,
          //     width: 400,
          //     height: 300,
          //     margin: "25 auto",
          //   },
          // }}
          // sx={{padding: 15}}
          >
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

            {/* <Paper /> */}
            {/* <Paper elevation={3} /> */}
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Car;
