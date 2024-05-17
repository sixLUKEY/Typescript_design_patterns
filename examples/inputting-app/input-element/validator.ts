class InputTextValidator {
    // Method to validate the textContent of an HTMLInputElement
    public static isValidTextContent(element: HTMLInputElement): boolean {
        const textContent = element.value.trim();
        // Define validation criteria here

        // Check that content is not empty
        if (textContent === ''){
            return false
        }

        // Add more rules as needed


        // If all validations pass
        return true
    }
}

// Example usage 
const inputElement = document.getElementById('input') as HTMLInputElement;
if (InputTextValidator.isValidTextContent(inputElement)){
    console.log('Input is valid')
} else {
    console.log('Input is invalid')
}