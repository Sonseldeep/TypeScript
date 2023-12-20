interface Product {
    name: string;
    price: number;
    applydiscount(discount: number): number;


}
const shoes: Product = {
    name: "balck shoes",
    price: 1000,
    applydiscount(discount: number): number {
        // here discount: same lekhi nu hunxa funcation arg ho tesaile
        return this.price * (1 - discount);
    }
}
console.log(shoes.applydiscount(0.5));
