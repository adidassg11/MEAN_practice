var numbers = new Buffer("123456789");
console.log(numbers.toString());


var slice = numbers.slice(3, 6);
console.log(slice.toString());

slice[0] = '#'.charCodeAt(0);
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(slice.toString());

//notice how the original 'numbers' var changes too, slice is pointing, not copying
console.log(numbers.toString());
