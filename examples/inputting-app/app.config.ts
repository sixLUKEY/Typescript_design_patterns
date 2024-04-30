export class Configuration {
  private static instance: Configuration;
  settings: any;

  private constructor(_settings: any) {
    this.settings = _settings;
  }

  static getInstance(settings: any): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration(settings);
    }
    return Configuration.instance;
  }
}
