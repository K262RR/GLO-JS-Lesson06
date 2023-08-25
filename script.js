let userValue = prompt('Угадай число от 1 до 100');

const guessBot = () => {
    
    const randomValue = 25;
    
    const responseСheck = () => {
        
        if (userValue == null) {
            alert('Игра окончена');
        }
         else if (userValue == 25) {
            alert('Поздравляю, Вы угадали!');
         } 
         else if (userValue > randomValue) {
            userValue = prompt('Загаданное число меньше. Попробуйте другое число');
            guessBot();
        } else if (userValue < randomValue) {
            userValue = prompt('Загаданное число больше. Попробуйте другое число');
            guessBot();
        }    
        else if ( isNaN(userValue) && !isFinite(userValue) ) {
            userValue = prompt('Введите число!');
            guessBot();
         } 
    }

    responseСheck();
}

guessBot();

