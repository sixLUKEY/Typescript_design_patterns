# Summary

Proxy forwards requests onto the Real Subject when applicable, depending on the kind of proxy.
A virtual proxy can cache elements of a real subject before loading the full object into memory.
A protection proxy can provide an authentication layer. For example, an NGINX proxy can add Basic Authentication restriction to an HTTP request.
A proxy can perform multiple tasks if necessary.
A proxy is different from an Adapter. The Adapter will try to adapt two existing interfaces together. The Proxy will use the same interface as the subject.
It is also very similar to the Facade, except you can add extra responsibilities, just like the Decorator. The Decorator however can be used recursively.
The intent of the Proxy is to provide a stand in for when it is inconvenient to access a real subject directly.
The Proxy design pattern may also be called the Surrogate design pattern.
