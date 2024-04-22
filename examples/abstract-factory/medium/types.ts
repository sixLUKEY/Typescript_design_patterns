// Abstract products
export interface Button {
    click(): string
}

export interface Panel {
    display(): string
}

// Abstract Factory
export interface UIAbstractFactory {
    createButton(): Button;
    createPanel(): Panel
}