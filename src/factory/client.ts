// Factory Use Case Example Code
import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair("BigChair");
console.log(CHAIR.getDimensions());
