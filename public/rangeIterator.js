class Range {
constructor(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step;
}

*[Symbol.iterator]() {
    for (let value = this.start; value < this.end; value += this.step) {
    yield value;
    }
}
}

console.log('Using for...of loop:');
for (const value of new Range(0, 10, 1)) {
console.log(value); // Logs values from 0 to 9
}

console.log('Using spread operator:');
console.log([...new Range(1, 10, 1)]); // Logs [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Manual iteration with .next():');
const iterator = new Range(1, 10, 1)[Symbol.iterator]();
console.log(iterator.next()); // Logs { value: 1, done: false }
console.log(iterator.next()); // Logs { value: 2, done: false }
console.log(iterator.next()); // Logs { value: 3, done: false }
console.log(iterator.next()); // Logs { value: 4, done: false }
console.log(iterator.next()); // Logs { value: 5, done: false }
console.log(iterator.next()); // Logs { value: 6, done: false }
console.log(iterator.next()); // Logs { value: 7, done: false }
console.log(iterator.next()); // Logs { value: 8, done: false }
console.log(iterator.next()); // Logs { value: 9, done: false }
console.log(iterator.next()); // Logs { value: undefined, done: true }
