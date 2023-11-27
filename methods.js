const student = {
  name: "kodom ali",
  money: 5000,
  study: "math",
  exam: function () {
    return `${this.name} is a student`;
  },
  improvexm: function (sub) {
    this.exam();
    return `${this.name} is taking improve ment ${sub}`;
  },
  treatdee: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};

// const op =student.exam()
// console.log(op);

const imop = student.improvexm("bangla");
console.log(imop);
const remaining = student.treatdee(300);
console.log(remaining);
const dola = student.treatdee(600)
console.log(dola);