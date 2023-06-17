// Plane
// Написать "Авиасимулятор" для больших и маленьких самолетов
// Авиасимулятор должен уметь "разрешать" полет самолетом в зависимости от скорости ветра
// Для больших самолетов должна быть еще проверка на достаточное количество пассажиров
// Метод должен возвращать фразу Takeoff for PLANE is approved/not approved.

// 1. Plane + Airlainer + Aerobatics
// 2. Simple takeoff
// 3. add new params (passenger)
// 4. makeFlightData + getCrosswindApprove
// 5. Airlainer => getPasApproval, makeFlightData

const CROSSWIND = 20;

class Plane {
  constructor(name, maxCrosswind) {
    this.name = name;
    this.maxCrosswind = maxCrosswind;
  }

  takeoff(pass) {
    return `Takeoff for ${this.name} is ${this.flightData(pass).every(data => data) ? 'approved' : 'not approved'}`;
  }

  flightData() {
    return [this.checkCrosswind()];
  }

  checkCrosswind() {
    return this.maxCrosswind > CROSSWIND;
  }
}

class Airlainer extends Plane {
  constructor(name, maxCrosswind, minPassanger) {
    super(name, maxCrosswind);
    this.minPassanger = minPassanger;
  }

  flightData(pass) {
    return [...super.flightData(), this.checkValueOfPassangers(pass)];
  }

  checkValueOfPassangers(pass) {
    return pass > this.minPassanger;
  }
}

class Aerobatics extends Plane {
  constructor(name, maxCrosswind) {
    super(name, maxCrosswind);
  }
}


const Boeing747 = new Airlainer('Boeing747', 40, 150);
const Extra330 = new Aerobatics('Extra330', 15);

console.log(Boeing747.takeoff(180));
console.log(Boeing747.checkCrosswind());
console.log(Extra330.takeoff());







// SuperMath

// Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.
// Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / *. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.
// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если - да, сделать математическое действие znak(которое описано в классе), иначе - запросить ввод новых данных через метод input() с класса SuperMath.

const OPERATIONS = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

class SuperMath {
  constructor() {
    this.input();
  }

  input() {
    do {
      this.x = +prompt('Enter x?');
    } while (isNaN(this.x));
    
    do {
      this.y = +prompt('Enter y?');
    } while (isNaN(this.y));

    do {
      this.znak = prompt(`Enter ${this.getOperations()} ?`);
    } while (!OPERATIONS[this.znak]);

    return this;
  }

  check() {
    const confirFromUser = confirm(`Do you want to do this ${this.x} ${this.znak} ${this.y}?`);
    
    return confirFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
  }

  getOperations() {
    return Object.keys(OPERATIONS).join(', ');
  }
}

const math = new SuperMath();

console.log(math.check());



// OOP





// SOLID


