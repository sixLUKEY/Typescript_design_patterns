class AccessibleInputValidator {
  private element: HTMLInputElement;

  constructor(_element: HTMLInputElement) {
    this.element = _element;
  }

  validate(): boolean {
    return false;
  }

  /**
   *
   * @returns true if input element is not null or undefined
   */
  validateElement(): boolean {
    if (!this.element) {
      console.error("Input element is not provided.");
      return false;
    }
    return true;
  }

  /**
   *
   * @returns true if input element has proper labeling
   */
  validateLabel(): boolean {
    if (!this.element.labels || this.element.labels.length === 0) {
      console.error("Input element must have an associated label");
      return false;
    }
    return true;
  }

  validateContrast(): boolean {
    const color = window.getComputedStyle(this.element).color;
    const bgColor = window.getComputedStyle(this.element).backgroundColor;
    
    return false
  }
}
