import Chairfactory from "./chair-factory";
import TableFactory from "./table-factory";
import { Product } from "./dimension";
import { ChairName } from "./chair";
import { TableName } from "./table";

export default class FurnitureFactory {
  static getFurniture<T extends ChairName, U extends TableName>(furniture: T | U): Product | undefined {
    try {
      if (["SmallChair", "MediumChair", "BigChair"].indexOf(furniture) > -1) {
        return Chairfactory.getChair(furniture);
      }
      if (["SmallTable", "MediumTable", "BigTable"].indexOf(furniture) > -1) {
        return TableFactory.getTable(furniture);
      }
      throw new Error("No Factory Found");
    } catch (err) {
      console.error(err);
    }
  }
}
