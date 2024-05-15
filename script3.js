/* Задание 3. Управление животными в зоопарке
Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

Приватные поля:
* #name: имя животного (строка).
* #age: возраст животного (число).
* #gender: пол животного (строка).
Публичные методы:
* constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
* changeName(newName): изменяет имя животного на новое.
* changeAge(newAge): изменяет возраст животного на новый.

Статическое поле:
* MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле 
в соответствии с описанием. */

class ZooAnimal {
  #name;
  #age;
  #gender;
  #species;
  static MAX_AGE = 80;

  constructor(name, age, gender, species) {
    this.#name = name;
    if (age > ZooAnimal.MAX_AGE) throw new Error("некорректный возраст");
    this.#age = age;
    this.#gender = gender;
    this.#species = species;
  }

  getInfo() {
    return `${this.#species}, имя: ${this.#name}, возраст: ${this.#age}, пол: ${
      this.#gender
    }`;
  }

  changeName(newName) {
    this.#name = newName;
  }

  changeAge(newAge) {
    if (newAge > ZooAnimal.MAX_AGE) throw new Error("некорректный возраст");
    this.#age = newAge;
  }
}

const elephant1 = new ZooAnimal("Элли", 70, "cамка", "слон");
console.log(elephant1.getInfo());
elephant1.changeName("Афина");
elephant1.changeAge(71);
console.log(elephant1.getInfo());
