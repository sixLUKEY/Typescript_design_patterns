// The command Pattern use case example
//* A Smart light switch

import Light from "./light";
import Switch from "./switch";
import SwitchOnCommand from "./switch-on-command";
import SwitchOffCommand from "./switch-off-command";

// Create a receiver
const LIGHT = new Light();

// Create commands
const SWITCH_ON = new SwitchOnCommand(LIGHT);
const SWITCH_OFF = new SwitchOffCommand(LIGHT);

// Register commands in the invoker
const SWITCH = new Switch();
SWITCH.register("ON", SWITCH_ON);
SWITCH.register("OFF", SWITCH_OFF);

// Execute commands registered on the invoker
SWITCH.execute("ON");
SWITCH.execute("OFF");
SWITCH.execute("ON");
SWITCH.execute("OFF");

// Show history
SWITCH.showHistory();

// Replay last two executed commands
SWITCH.replayLast(2);
