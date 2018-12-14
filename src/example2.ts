interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p21: Person2 = {
  name: 'Mark',
  age: 35
};

const p22: Person2 = {
  name: 'Anna'
};

hello2(p21); // 안녕하세요! Mark 입니다.
hello2(p22); // 안녕하세요! Anna 입니다.
