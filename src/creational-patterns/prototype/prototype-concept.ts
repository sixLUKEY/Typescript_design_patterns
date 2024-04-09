interface IPrototype {
  // Interface with clone method
  clone(): this;
  /**
   * Clone is deep or shallow
   * Up to you how you want to implement details in your concrete class
   */
}

class MyClass implements IPrototype {
  // A Concrete class
  public field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone(): this {
    return Object.assign({}, this); // For a shallow copy
    /**
     * @optional
     *  return JSON.parse(JSON.stringify(this)); // For a deep copy
     */
  }
}

// Client side
// Create an object containing an array

const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);

const OBJECT2 = OBJECT1.clone(); // Clone Object
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);

/**
 * @description
 * Change the value of one of the array elements in OBJECT2
 * Depending on clone method, either a shallow or deep copy was performed
 */
OBJECT2.field[1] = 101;

// Compare OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);

/**
 * @output
 *  
 *  When using a shallow copy, changing the inner item of OBJECT2 also affects OBJECT1
 * 
 *  When using a deep copy, changing the inner item of OBJECT2 does NOT affect OBJECT1 
 */