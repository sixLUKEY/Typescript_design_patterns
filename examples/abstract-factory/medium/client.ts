import { messageLogger } from './logger';
import { DarkModeFactory } from "./factories";
import { Button, Panel, UIAbstractFactory } from "./types";


// Client code
const factory: UIAbstractFactory = new DarkModeFactory()

const button: Button = factory.createButton()
messageLogger.read(button.click())

const panel: Panel = factory.createPanel();
messageLogger.read(panel.display())
messageLogger.read(panel.display())

messageLogger.showLogs()