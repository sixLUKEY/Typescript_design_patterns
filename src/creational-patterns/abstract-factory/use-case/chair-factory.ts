import { ChairName } from "../../factory/use-case/chair";
import { Product } from "./dimension";
import BigChair from "./big-chair";
import MediumChair from "./medium-chair";
import SmallChair from "./small-chair";

export default class Chairfactory {
  static getChair(chair: ChairName): Product {
    if (chair === "BigChair") {
      return new BigChair();
    } else if (chair === "SmallChair") {
      return new SmallChair();
    } else if (chair === "MediumChair") {
      return new MediumChair();
    } else {
      throw new Error("No chair found.");
    }
  }
}
