// A Proxy concept example

/**
 * An interface implemented by both the proxy and real subject
 */
interface ISubject {
  request(): Array<number>;
}

/**
 * The actual object that the proxy is representing
 */
class RealSubject implements ISubject {
  enormousData: number[];

  /** Returns a hypothetically enormous amount of data */
  constructor() {
    this.enormousData = [1, 2, 3];
  }
  request(): number[] {
    return this.enormousData;
  }
}

/**
 * In this case the proxy acts as a cache for 'enormous_data' and only populates the 'enormous_data' when it is actually necessary
 * @method request() uses the proxy as a cache and loads data into it only when necessary
 */
class ProxySubject implements ISubject {
  enormousData: number[];
  realSubject: RealSubject;

  constructor() {
    this.enormousData = [];
    this.realSubject = new RealSubject();
  }

  /** uses the proxy as a cache and loads data into it only when necessary */
  request(): number[] {
    if (this.enormousData.length === 0) {
      console.log("Pulling data from RealSubject.");
      this.enormousData = this.realSubject.request();
      return this.enormousData;
    }
    console.log("Pulling data from Proxy Cache");
    return this.enormousData;
  }
}


// Client side
const PROXY_SUBJECT = new ProxySubject()
// Use the subject. It will load the enormous amounts of data the first time
console.log(PROXY_SUBJECT.request())
// Use the subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request())