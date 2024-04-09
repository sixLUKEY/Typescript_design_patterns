// A Singleton Dictionary or Reported Events

export default class Reports {
  static instance: Reports;
  protected reports: { [id: string]: [number, string] } = {};
  protected rowId = 0;

  constructor() {
    if (Reports.instance) {
      return Reports.instance;
    }
    Reports.instance = this;
  }

  getHistory(): { [id: string]: [number, string] } {
    return this.reports;
  }

  logEvent(event: string): boolean {
    this.reports[this.rowId] = [Date.now(), event];
    this.rowId = this.rowId += 1;
    return true;
  }
}
