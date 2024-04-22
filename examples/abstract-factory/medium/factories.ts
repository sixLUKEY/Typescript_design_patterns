import { DarkButton, DarkPanel, LightButton, LightPanel } from "./products";
import { Button, Panel, UIAbstractFactory } from "./types";

export class DarkModeFactory implements UIAbstractFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createPanel(): Panel {
    return new DarkPanel();
  }
}

export class LightModeFactory implements UIAbstractFactory {
  createButton(): Button {
    return new LightButton();
  }

  createPanel(): Panel {
    return new LightPanel();
  }
}
