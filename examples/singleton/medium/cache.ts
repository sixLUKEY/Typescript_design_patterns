import ICache from "./cache.interface";

class HiddenCache implements ICache {
  private static instance: HiddenCache;

  protected cacheMap: Map<string, any>;

   constructor() {
    this.cacheMap = new Map();
  }

  get<T>(key: string, updateTtl?: boolean): T | undefined {
    return this.cacheMap.get(key);
  }

  set<T>(key: string, value: T, ttl: number): any {
    this.cacheMap.set(key, value);
  }

  has(key: string): boolean {
    return this.cacheMap.has(key);
  }

  del(key: string): any {
    this.cacheMap.delete(key);
  }

  clear(): void {
    this.cacheMap.clear();
  }

  static getInstance(): HiddenCache {
    if (!this.instance){
        this.instance = new HiddenCache()
    }
    return this.instance;
  }

  init(options: any): void {
      
  }

  wrap<T>(key: string, work: T, ttl: number): any {
      return 
  }

  itemCount(): number {
      return 0
  }

  keys(): string[] {
      return []
  }
}

const cache = new HiddenCache()
export default cache;
