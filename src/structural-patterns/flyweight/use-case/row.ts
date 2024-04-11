// A row in the table

import Column from "./column";
/**
 * @method getData() format the row before returning it to the table
 */
export default class Row {
  columns: Column[];

  constructor(column_count: number) {
    this.columns = [];
    for (let i = 0; i < column_count; i++) {
      this.columns.push(new Column());
    }
  }
  getData(): string {
    let ret = "";
    this.columns.forEach((col) => {
      ret = `${ret}${col.getData()}|`;
    });
    return ret;
  }
}
