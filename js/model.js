// Import the calculate function from the utils.js module
import { calculate } from './utils.js';

// Define and export the Calculadora class
export default class Calculadora {
    // Constructor method initializes the instance variables
    constructor() {
        // Initialize value1, value2, and operator to undefined
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }

    // Method to set the value of value1 or value2 based on the presence of an operator
    set(val) {
        // If no operator is set
        if (this.operator === undefined) {
            // If value1 is undefined, set it to val as a string
            if (this.value1 === undefined)
                this.value1 = val.toString();
            // If value1 is already defined, append val to it as a string
            else
                this.value1 += val.toString();
            // Return the updated value1
            return this.value1;
        } else { // If an operator is already set
            // If value2 is undefined, set it to val as a string
            if (this.value2 === undefined)
                this.value2 = val.toString();
            // If value2 is already defined, append val to it as a string
            else
                this.value2 += val.toString();
            // Return the updated value2
            return this.value2;
        }
    }

    // Method to add a decimal point to value1 or value2
    set_point() {
        // If no operator is set
        if (this.operator === undefined) {
            // If value1 is undefined, set it to '0.'
            if (this.value1 === undefined)
                this.value1 = '0.';
            // If value1 doesn't already contain a decimal point, append it
            else if (this.value1.toString().indexOf('.') === -1)
                this.value1 += '.';
            // Return the updated value1
            return this.value1;
        } else { // If an operator is already set
            // If value2 is undefined, set it to '0.'
            if (this.value2 === undefined)
                this.value2 = '0.';
            // If value2 doesn't already contain a decimal point, append it
            else if (this.value2.toString().indexOf('.') === -1)
                this.value2 += '.';
            // Return the updated value2
            return this.value2;
        }
    }

    // Method to perform the calculation based on the operands and operator
    operate() {
        // If there is only value1 and no operator, return value1
        if (this.value2 === undefined && this.operator === undefined && this.value1 !== undefined) {
            // Reset value2 and operator to undefined
            this.value2 = undefined;
            this.operator = undefined;
            // Return value1
            return this.value1;
        }

        // If there is value2 but no operator, return value2
        if (this.value2 !== undefined && this.operator === undefined && this.value1 !== undefined) {
            // Set value1 to value2 and reset value2 and operator to undefined
            this.value1 = this.value2;
            this.value2 = undefined;
            this.operator = undefined;
            // Return value2
            return this.value2;
        }

        // If any value is undefined, return 'Error'
        if (this.value1 === undefined || this.value2 === undefined || this.operator === undefined) {
            // Reset all values to undefined
            this.value1 = undefined;
            this.value2 = undefined;
            this.operator = undefined;
            // Return 'Error'
            return 'Error';
        }

        // Parse values to floats
        let a = parseFloat(this.value1);
        let b = parseFloat(this.value2);

        // Perform calculation using the imported calculate function
        const result = calculate(a, b, this.operator);

        // Update value1 with the result and reset value2 and operator to undefined
        this.value1 = result;
        this.value2 = undefined;
        this.operator = undefined;
        // Return the result
        return result;
    }

    // Method to clear all values and operator
    clear() {
        // Reset all values to undefined
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }
}


/* import { calculate } from './utils.js';

export default class Calculadora {
    constructor() {
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }

    set(val) {
        if (this.operator === undefined) {
            if (this.value1 === undefined)
                this.value1 = val.toString();
            else
                this.value1 += val.toString();
            return this.value1;
        } else {
            if (this.value2 === undefined)
                this.value2 = val.toString();
            else
                this.value2 += val.toString();
            return this.value2;
        }
    }

    set_point() {
        if(this.operator === undefined) {
            if(this.value1 === undefined)
                this.value1 = '0.';
            else if(this.value1.toString().indexOf('.') === -1)
                this.value1 += '.';

            return this.value1;
        }
        else {
            if(this.value2 === undefined)
                this.value2 = '0.';
            else if(this.value2.toString().indexOf('.') === -1)
                this.value2 += '.';

            return this.value2;
        }
    }

    operate() {
        // Si només hi ha valor1, retorna'l
        if(this.value2 === undefined && this.operator === undefined && this.value1 !== undefined) {
            this.value2 = undefined;
            this.operator = undefined;
            return this.value1;
        }

        // Si no s'ha definit l'operador, retorna el segon valor
        if(this.value2 !== undefined && this.operator === undefined && this.value1 !== undefined) {
            this.value1 = this.value2;
            this.value2 = undefined;
            this.operator = undefined;
            return this.value2;
        }

        // Si hi ha algun valor per definir, retorna error
        if(this.value1 === undefined || this.value2 === undefined || this.operator === undefined) {
            this.value1 = undefined;
            this.value2 = undefined;
            this.operator = undefined;
            return 'Error';
        }

        let a = parseFloat(this.value1);
        let b = parseFloat(this.value2);

        const result = calculate(a, b, this.operator);

        this.value1 = result;
        this.value2 = undefined;
        this.operator = undefined;
        return result;
    }

    clear() {
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }
}

 */