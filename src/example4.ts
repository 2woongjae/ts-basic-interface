interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 35,
  hello: function(): void {
    console.log(this);
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const p42: Person4 = {
  name: 'Mark',
  age: 35,
  hello(): void {
    console.log(this);
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

/*
const p43: Person4 = {
  name: 'Mark',
  age: 35,
  hello: (this: Person4): void => {
    console.log(this);
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};
*/

p41.hello(); // 안녕하세요! Mark 입니다.
p42.hello(); // 안녕하세요! Mark 입니다.
// p43.hello(); // 안녕하세요! 입니다.
