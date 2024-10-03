// Задание 1 // Создаем массив из элементов: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементы в формате "имя возраста лет/годов".

// Задание 1 // 
const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

const combinedArray = names.map((name, index) => `${name} ${ages[index]} лет/годов`);
console.log("Массив имен с возрастами:", combinedArray);

// Задание 2 // выполняем пройденные при занятии методы массива получаем из этого массива новый массив, элементы которого поступают в обратную последовательность.

// Задание 2 //
const reversedArray = [...combinedArray].reverse();
console.log("Массив в обратной последовательности:", reversedArray);

// Задание 3 // Создаем пустой массив страны. Добавьте в массив следующие страны: «Франция», «Германия», «Италия». Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Вы вводите страны в консоль
// Задание 3 //
const countries = [];
countries.push("Франция", "Германия", "Италия");

const removedCountry = countries.pop();
countries.unshift(removedCountry);

console.log("Массив стран после изменений:", countries);

// Задание 4 // Создать объект автомобиля с ключами марки, модели, года и isElectric. Задайте им значения. // Вы вводите на экране все ключевые объекты объекта // Вы вводите на экране все значения объекта // Добавляем в объект car метод getCarInfo, который будет возвращать код, содержащий информацию о марке, модели и году выпуска машины. // Вызовите этот метод и выведите результат на экран. // выполняем итерацию по ключам с помощью цикла for...in. // Внутри пары циклов выведите на экран каждый ключ: значение. // Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, «Ключ: бренд, Значение: Toyota».

// Задание 4 //
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    isElectric: true,
    getCarInfo: function() {
      return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`;
    }
  };
  
  console.log("Ключи объекта car:", Object.keys(car));

  console.log("Значения объекта car:", Object.values(car));
  
  console.log("Информация об автомобиле:", car.getCarInfo());
  
  for (let key in car) {
    if (car.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, Значение: ${car[key]}`);
    }
  }