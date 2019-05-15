if (confirm(`${player.name}, сыграем в игру?`)) { // хочет ли пользователь сыграть?
    /**
     * Функция playGame запускает саму игру в викторину. Не принимает никаких аргументов,
     * рекурсивна.
     */
    function playGame() {
    // играем
        for (let i = questions.length, questNum = 0; i >= 0; i--, questNum++) { // перебираю массив с вопросами
            if (questions[questNum] !== undefined) {
                let variants = "", varNum = 1;
                do {
                // перебираю массив с вариантами ответов и формирую строку для показа в вопросе
                    variants += `${varNum}: ${questions[questNum].vars[varNum]}\n`;
                    varNum++;
                } while (varNum <= 4); // вариантов ответа всегда 4
    
                let playerAnswer = prompt(`${questions[questNum].quiz}:\n\n${variants}\n\nДля окончания напишите 0 или нажмите "Отмена"`); // задаю вопрос
                
                if (playerAnswer == 0 || playerAnswer == undefined) {
                // если пользователь решил закончить, прощаюсь и завершаю игру
                    alert("Пока-пока!");
                    break;
                } else if (playerAnswer == questions[questNum].correctVar) {
                // если ответ верный, говорю "правильно" и увеличиваю счетчик правильных ответов на 1
                    alert("Правильно!");
                    player.correctAnswers++;
                } else {
                    alert("Неправильно!");
                }
            } else {
                let closeCase = "";
                switch (player.correctAnswers) {
                // определяю окончания слова "вопрос" в зависимости от количества правильных ответов
                    case 0:
                    case 5:
                        closeCase = "вопросов";
                        break;
                    case 1:
                        closeCase = "вопрос";
                        break;
                    case 2:
                    case 3:
                    case 4:
                        closeCase = "вопроса";
                }
                alert(`${player.name}, вы ответили правильно на ${player.correctAnswers} ${closeCase} из ${questions.length}!`); // поздравлялка

                if(confirm(`Ну что, ${player.name}, еще разок?`)) {
                // если пользователь хочет еще, даем еще
                    player.correctAnswers = 0;
                    playGame();
                } else {
                    alert("Пока-пока!");
                }
            }
        };
    };
    playGame();
} else {
    alert("Пока-пока!");
}