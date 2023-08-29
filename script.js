let userNumber = prompt('Угадай число от 1 до 100');
let count = 10;
let userChoise;

const gameBot = () => {
    
    const randomNumber = 25;

    const newGame = (message) => {
        userChoise = confirm(message);
        if (userChoise) {
            userNumber = prompt('Угадай число от 1 до 100');
        count = 10;
        gameBot();
        } else {
            alert('До новых встреч!')
            return;
        }        
    }

    const responseCheck = () => {

        if (userNumber === null) {
            alert('Игра окончена');
            return false;

        } else if( isNaN(userNumber) && !isFinite(userNumber) ) {
            userNumber = prompt('Введи число!');
            gameBot();
        
        }  else if (userNumber > randomNumber) {
            count--;
            userNumber = prompt('Загаданное число меньше. Осталось попыток - ' + count);
            gameBot();

        } else if (userNumber < randomNumber) {
            count--;
            userNumber = prompt('Загаданное число больше. Осталось попыток - ' + count);
            gameBot();

        } else if (userNumber == randomNumber) {
            newGame('Поздравляю, Вы угадали! Желаете сыграть еще?')
            return;

        }
    }

    if (count <= 1) {
        newGame('Ваши попытки закончились. Желаете сыграть еще?')      
    } else {
        responseCheck();
    }
}

gameBot();