/*
function hello1(person: { name: string; age: number; }): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: { name: string; age: number; } = {
    name: 'Mark',
    age: 35
};

hello1(p1); // 안녕하세요! Mark 입니다.
*/

interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: 'Mark',
  age: 35
};

hello1(p1); // 안녕하세요! Mark 입니다.
