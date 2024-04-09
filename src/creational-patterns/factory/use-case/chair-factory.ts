import BigChair from "./big-chair";
import MediumChair from "./medium-chair";
import SmallChair from "./small-chair";
import { IChair } from "./chair";
import { ChairName } from "./chair";

export default class ChairFactory {
  static getChair(chair: ChairName): IChair {
    if (chair === "BigChair") {
      return new BigChair();
    } else if (chair === "SmallChair") {
      return new SmallChair();
    } else return new MediumChair();
  }
}
