# Chain of Responsibility Use Case

In the ATM example below, the chain is hard coded in the client first to dispense amounts of R50s, then R20s and then R10s in order.

This default chain order helps to ensure that the minimum number of notes will be dispensed. Otherwise, it might dispense 5 x R10 when it would have been better to dispense 1 x R50.
