interface Person3 {
  name: string;
  age?: number;
  [props: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: 'Mark',
  age: 35
};

const p32: Person3 = {
  name: 'Anna',
  systers: ['Sung', 'Chan']
};

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32
};

hello3(p31); // 안녕하세요! Mark 입니다.
hello3(p32); // 안녕하세요! Anna 입니다.
hello3(p33); // 안녕하세요! Bokdaengi 입니다.
