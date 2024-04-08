function calculate() {
    var display = document.querySelector('input[name="display"]');
    var expression = display.value;

    try {
        var result = eval(expression); // Use eval() to evaluate the expression
        display.value = result; // Update the display with the result
    } catch (error) {
        display.value = 'Error'; // Display 'Error' if there's an error in the expression
    }
}