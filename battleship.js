var randomLoc = Math.floor (Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
  guess = prompt ("300.30.3 Введи поле от 0 до 6");
    if (guess < 0 || guess > 6) { 
      alert ("В молоко. Повторите попытку");
    } else {
        guesses = guesses + 1;
    
      if (guess == location1 || guess == location2 || guess == location3) {
        alert ("Попадание!");  
        hits = hits + 1; 
        if (hits == 3) {
          isSunk = true;
          alert ("Корабль потоплен");
        }    
      } else {
        alert ("Промах!");
      }
    } 
}
var stats = "Вы произвели " + guesses + " выстрела(ов). " + " В результате корабль потоплен. Точность вашей стрельбы " + (3/guesses);
alert(stats);