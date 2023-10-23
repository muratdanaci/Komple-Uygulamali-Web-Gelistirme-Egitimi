// let number = 5;
// number = "a"; // error

// let a;
// a = 5;
// a = "a";
// a = true; // no error

// let a: number;
// a = 5;
// a = "a"; // error
// a = true; // error

// let a: number = 5;
// let b: string = "a";
// let c: boolean = true;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: Array<number> = [1, 2, 3];
// let g: any[] = [1, "a", true];
// let h: [string, number, boolean] = ["a", 1, false]; // tuple

// const krediPayment = 0;
// const havalePayment = 1;
// const eftPayment = 2;

// enum Payment {kredi, havale, eft};
// let kredi = Payment.kredi; //0
// let havale = Payment.havale; //1
// let eft = Payment.eft; //2

enum Payment {kredi = 0, havale = 5, kapidaOdeme = 2, eft = 1};
let kredi = Payment.kredi; //0
let havale = Payment.havale; //5
let kapidaOdeme = Payment.kapidaOdeme; //2
let eft = Payment.eft; //1

