# Adapter Use Case

The example client can manufacture a Cube using different tools. Each solution is invented by a different company. The client user interface manages the Cube product by indicating the width, height and depth. This is compatible with the company A that produces the Cube tool, but not the company B that produces their own version of the Cube tool that uses a different interface with different parameters.

In this example, the client will re-use the interface for company A's Cube and create a compatible Cube from company B.

An adapter will be needed so that the same method signature can be used by the client without the need to ask company B to modify their Cube tool for our specific domains use case.

My imaginary company needs to use both cube suppliers since there is a large demand for cubes and when one supplier is busy, I can then ask the other supplier.
