import { Button, Panel } from "./types";

// Concrete Product: Dark Mode
export class DarkButton implements Button {
  click(): string {
    return `Clicked a dark button!`;
  }
}

export class DarkPanel implements Panel {
  display(): string {
    return `Displaying a dark panel.`;
  }
}

export class LightButton implements Button {
  click(): string {
    return `Clicked a light button!`;
  }
}

export class LightPanel implements Panel {
  display(): string {
    return `Displaying a light panel`;
  }
}
