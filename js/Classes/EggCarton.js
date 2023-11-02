class EggCarton {

    // constructor function runs automatically whenever an obj is instantiated from the Class
    constructor(numEggs) {
        // get num eggs passed to constructor:
        this.numEggs = numEggs;
        // calc num cartons
        this.numCartons = Math.floor(this.numEggs / 12)
        // store result in array of objects
        this.objArr = [];
        // loop once per carton
        for (let i = 0; i < this.numCartons; i++) { // loop once per carton
            const dozenEggs = []; // array for storing a dozen eggs
            // loop 12x, pushing random 25, 30, 35, 40, 45 or 50 each time:
            for (let j = 0; j < 12; j++) {
                dozenEggs.push(Math.floor(Math.random() * 6) * 5 + 25);
            }
            // use reduce() to calc tot price of the 12 eggs in array:
            let cartonPrice = dozenEggs.reduce((acc, e) => acc += e, 0);
            // push obj of two properties into the objArr:
            this.objArr.push({ carton: dozenEggs, price: cartonPrice });
        }

        // Improve Price Parity by narrowing min-max price difference
        // sort the array of objects by price property, in ascending order
        this.objArr.sort((a, b) => a.price > b.price ? 1 : -1);
        // cheapest array is at index 0; get the index of the first 25:
        let indexOf25 = this.objArr[0].carton.indexOf(25);
        // change the first 25 in cheapest carton to 51
        this.objArr[0].carton[indexOf25] = 51;
        // update the price of the changed array:
        this.objArr[0].price = this.objArr[0].carton.reduce((acc, e) => acc += e, 0);
        // change a 50 from most expensive carton at last index to 24 
        let indexOf50 = this.objArr[this.objArr.length - 1].carton.indexOf(50);
        this.objArr[this.objArr.length - 1].carton[indexOf50] = 24;
        this.objArr[this.objArr.length - 1].price = this.objArr[this.objArr.length - 1].carton.reduce((acc, e) => acc += e, 0);
        // re-sort the array of objects by price, in ascending order
        this.objArr.sort((a, b) => a.price > b.price ? 1 : -1);
        return this.objArr; // return the array of objects

    } // end constructor

} // end class Egg