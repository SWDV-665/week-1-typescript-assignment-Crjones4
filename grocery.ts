// create a class
class Grocery {
    // declare attributes
    name: string;
    quantity: number;
    price: number;

    // add a constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// create a list of grocery items
let list_of_items = [
    new Grocery("milk", 2, 12),
    new Grocery("bread", 6, 20),
    new Grocery("egg", 4, 10)
]

// access the html element with id app
const ele = document.getElementById("app");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});