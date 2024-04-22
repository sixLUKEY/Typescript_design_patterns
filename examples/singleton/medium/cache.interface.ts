export default interface ICache {
  init(options: any): void;
  wrap<T>(key: string, work: T, ttl: number): Promise<T>;
  has(key: string): boolean;
  get<T>(key: string, updateTtl?: boolean): T | undefined;
  set<T>(key: string, value: T, ttl: number): boolean;
  del(key: string): boolean
  itemCount(): number
  keys(): string[]
  clear(): void
}
