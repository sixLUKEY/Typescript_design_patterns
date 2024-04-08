import { TableName } from "./table";
import BigTable from "./big-table";
import { Product } from "./dimension";
import MediumTable from "./medium-table";
import SmallTable from "./small-table";

export default class TableFactory {
  static getTable(table: TableName): Product {
    if (table === "BigTable") {
      return new BigTable();
    } else if (table === "MediumTable") {
      return new MediumTable();
    } else if (table === "SmallTable") {
      return new SmallTable();
    } else throw new Error('No table found.')
  }
}
