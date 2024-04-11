// A formatted Table

import Row from "./row";

/**
 * @param row_count the amount of rows you want generated
 * @param column_count the amount of columns you want generated within each row
 * @method draw() draws the formatted table in the console
 */
export default class Table {
  rows: Row[];

  constructor(row_count: number, column_count: number) {
    this.rows = [];
    for (let i = 0; i < row_count; i++) {
      this.rows.push(new Row(column_count));
    }
  }

  draw(): void {
    let maxRowLength = 0;
    const rows: string[] = [];
    this.rows.forEach((row) => {
      const rowData = row.getData();
      rows.push(`|${rowData}`);
      const rowLength = rowData.length + 1;
      if (maxRowLength < rowLength) {
        maxRowLength = rowLength;
      }
    });
    console.log("-".repeat(maxRowLength));
    rows.forEach((row) => {
      console.log(row);
    });
    console.log("-".repeat(maxRowLength));
  }
}
