# -Source Code

This concept example will simulate a virtual proxy. The real subject will be called via the proxy. The first time the request is made, the proxy will retrieve the data from the real subject. The second time it is called, it will return the data from the proxies own cache which it created from the first request.
