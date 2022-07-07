// const person = {
//   surname: "Stark",
//   knows: function (what, name) {
//     console.log(`You know ${what}, ${name} ${this.surname} `);
//   },
// };

// const john = { surname: "Snow" };

// person.knows("Everything", "Brann");
// person.knows.call(john, "Nothing", "John");
// person.knows.apply(john, ["Nothing", "John"]);
// person.knows.call(john, ...["Nothing", "John"]);
// const bound = person.knows.bind(john, "Nothing", "John");
// bound();

// ============================================================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// const elena = new Person("Elena", 20);

// =============================================================== Явный
// function logThis() {
//   console.log(this);
// }

// const obj = { num: 42 };
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// =================================================================== Неявный
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this);
//   },
// };

// animal.logThis();

// ===========================================================================

// function Cat(color) {
//   this.color = color;
//   console.log("This", this);
//   (() => {
//     console.log("Arrow this", this);
//   })();
// }

// new Cat("red");
