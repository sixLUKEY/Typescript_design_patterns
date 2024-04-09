// Adapter Example use case
import CubeA from "./cube-a";
import CubeBAdapter from "./cube-b-adapter";

const totalCubes = 5;
let counter = 0;

const manufactureCube = () => {
  // produce 5 cubes from whichever supllier can manufacture it first
  const width = Math.floor(Math.random() * 10) + 1;
  const height = Math.floor(Math.random() * 10) + 1;
  const depth = Math.floor(Math.random() * 10) + 1;

  let cube = new CubeA();

  let success = cube.manufacture(width, height, depth);
  if (success) {
    counter += 1;
  } else {
    // try other manufacturer
    console.log("Company A was busy, so trying Company B");
    cube = new CubeBAdapter();
    success = cube.manufacture(width, height, depth);
    if (success) {
      counter += 1;
    } else {
      console.log("Company B was busy, so trying Company A");
    }
  }
};

// wait some time between manufacturing each cube
const interval = setInterval(() => {
  manufactureCube();
  if (counter >= totalCubes) {
    clearInterval(interval);
    console.log(`${totalCubes} cubes have been manufactured`);
  }
}, 1000);
