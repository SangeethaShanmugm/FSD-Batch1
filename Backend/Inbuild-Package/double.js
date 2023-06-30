const double = (num) => num * 2;

const [, , n] = process.argv;

//console.log(double(n));

//console.log(process.argv[3]);

const add = (n1, n2) => n1 + n2;

const [, , n1, n2] = process.argv;
console.log(add(+n1, +n2));
