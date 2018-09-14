/** Lambda Calculus - Fundamentals of Lambda Calculus & Functional Programming in JavaScript
 * https://www.youtube.com/watch?v=3VQ382QG-y4
 */

// IDENTITY
const I = a => a;
// MOCKINGBIRD
const M = f => f(f);
// KESTREL
const K = a => b => a;
// KITE
/* 
 KESTEL(IDENTITY)(a)(b) alway return b
 K(I)(a)(b) === b
*/
const KI = a => b => b;

// IDENTITY OF THE IDENTITY
console.log(I(I)); // IDENTITY [Function: I]

// just like I(I)
console.log(M(I)); // [Function: I]

try {
  M(M); // MOCKINGBIRD of the MOCKINGBIRD is omega[infinity loop]
} catch (e) {
  console.log(e.message);
} // Maximum call stack size exceeded

// KESTREL OF IDENTITY AND THE MOCKINGBIRD
console.log(K(I)(M)); // IDENTITY [Function: I]

// KESTREL OF KESTREL AND THE MOCKINGBIRD
/*
 It's doesn't matter what the second thing is
 it's irrelevant the ["KESTREL just take 2 thing 
 and return the first one"]
 */
console.log(K(K)(M)); // KESTREL [Function: K]
console.log(K(3)(I)); // 3 "KESTREL take two thing return the first one"
// K5 is curry function
const K5 = K(5); // KESTREL resive two paramiter
console.log(K5(3)); // 5 Same as K(5)(3)

// KITE
/*
K(I)(a) === IDENTITY x[Function: I] // KESTREL take two thing and return the first one
K(I)(a)(b) === b
The KITE K(I) take two parameter (a)(b)
and return "the second one" is b
Same as const KI = a => b => b
*/
console.log(K(I)(1)(2)); // 2
console.log(KI(4)(9)); // 9
