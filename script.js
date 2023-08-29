let userNumber = prompt('Угадай число от 1 до 100');
let count = 10;
let userChoise;

const gameBot = () => {
    
    const randomNumber = 25;

    const newGame = (message) => {
        userChoise = confirm(message)
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
            console.log('null');
            alert('Игра окончена');
            return false;

        } else if( isNaN(userNumber) && !isFinite(userNumber) ) {
            userNumber = prompt('Введи число!');
            console.log('nan');
            gameBot();
        
        }  else if (userNumber > randomNumber) {
            count--;
            console.log('меньше');
            userNumber = prompt('Загаданное число меньше. Осталось попыток - ' + count);
            gameBot();

        } else if (userNumber < randomNumber) {
            count--;
            console.log('больше');
            userNumber = prompt('Загаданное число больше. Осталось попыток - ' + count);
            gameBot();

        } else if (userNumber == randomNumber) {
            console.log('равно');
            newGame('Поздравляю, Вы угадали! Желаете сыграть еще?')
            // alert('Поздравляю, Вы угадали!');
            return;

        }
    }

    if (count <= 1) {
        // userChoise = confirm('Ваши попытки закончились. Желаете сыграть еще?')
        // if (userChoise) {
        //     newGame();
        // } else {
        //     alert('До новых встреч!')
        //     return;
        // }
        newGame('Ваши попытки закончились. Желаете сыграть еще?')
      
    } else {
        responseCheck();
    }
}

gameBot();


/*

let count = 10
let oneMoreGame = true;
let choise;

const guessBot = () => {
    const randomValue = 25;

    // const reGame = (message) => {
    //     let choise =  confirm(message);
    //     if (choise) {
    //         count = 10;
    //         userValue = prompt('Угадай число от 1 до 100');
    //         guessBot();
    //     } else {
    //         alert('До новых встреч!');
    //         oneMoreGame = false;
    //     }
    // }

    const responseСheck = () => {
        if (userValue == null) {
            alert('Игра окончена');
            oneMoreGame = false;
        }
        else if (userValue == 25) {
            // reGame('Поздравляю, Вы угадали! Хотели бы сыграть еще?')
            choise =  confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?');
            if (choise) {
                count = 10;
                userValue = prompt('Угадай число от 1 до 100');
                guessBot();
            } else {
                alert('До новых встреч!');
                oneMoreGame = false;
                // return;
            }
        } 
        else if (userValue > randomValue) {
            userValue = +prompt(`Загаданное число меньше, осталось ${--count} попыток`);
            guessBot();
        } else if (userValue < randomValue) {
            userValue = +prompt(`Загаданное число больше, осталось ${--count} попыток`);
            guessBot();
        } else if( isNaN(userValue) && !isFinite(userValue) ) {
            userValue = +prompt('Введите число!');
            guessBot();
        } else {
            userValue = +prompt('Некорректный ввод');
            guessBot();
        }
    } 
    
    if (!oneMoreGame) {
        return;
    }

    if (count < 2) {
        // reGame('У вас больше не осталось попыток! Хотели бы сыграть еще?')
        choise =  confirm('У вас больше не осталось попыток! Хотели бы сыграть еще?');
        if (choise) {
            count = 10;
            userValue = prompt('Угадай число от 1 до 100');
            guessBot();
        } else {
            alert('До новых встреч!');
            oneMoreGame = false;
            return;
        }
    }

    responseСheck();
}

guessBot();

*/