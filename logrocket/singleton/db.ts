import { MongoClient, Db, MongoClientOptions } from "mongodb";
export class DBInstance {
  private static instance: Db;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      const URL = "mongodb://localhost:27017";
      const dbName = "sample";
      MongoClient.connect(URL, ((err: Error, client: any) => {
        if (err) console.log("Db error : ", err);
        const db = client.db(dbName);
        this.instance = db;
      }) as MongoClientOptions);
    }
    return this.instance;
  }
}
