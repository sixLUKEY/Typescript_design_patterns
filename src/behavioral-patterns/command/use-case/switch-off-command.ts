import ICommand from "./icommand";
import Light from "./light";

export default class SwitchOffCommand implements ICommand {
    protected light: Light

    constructor(light: Light){
        this.light = light 
    }

    execute(): void {
        this.light.turnOff()
    }
}