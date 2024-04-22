import cache from "./cache";

cache.set('singleton data', 'a whole lotta data', 0)
console.log(cache.get('singleton data'))