let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число 2, 4, 6 или 8 для перемещения по прямой или 1, 3, 7, 9 для перемещения по диагонали. "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2 , 3, 4, 6, 7, 8 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        /* Определяем направление и обновляем местоположение игрока в зависимости от направления
        и его положения на карте. */
        switch (true) {
            case direction == 1 && nextPosition.y !== 9 && nextPosition.x !== 0:
            //если игрок не полностью слева и не полностью внизу, шагаем вниз и влево
                nextPosition.x--;
                nextPosition.y++;
                break;
            case direction == 2 && nextPosition.y !== 9:
            // если игрок не полностью внизу, шагаем вниз
                nextPosition.y++;
                break;
            case direction == 3 && nextPosition.y !== 9 && nextPosition.x !== 9:
            // если игрок не полностью внизу и не полностью справа, шагаем вниз и вправо
                nextPosition.x++;
                nextPosition.y++;
                break;
            case direction == 4 && nextPosition.x !== 0:
            // если игрок не полностью слева, шагаем влево
                nextPosition.x--;
                break;
            case direction == 6 && nextPosition.x !== 9:
            // если игрок не полностью справа, шагаем вправо
                nextPosition.x++;
                break;
            case direction == 7 && nextPosition.x !== 0 && nextPosition.y !== 0:
            // если игрок не в крайнем левом углу, шагаем вверх и влево
                nextPosition.x--;
                nextPosition.y--;
                break;
            case direction == 8 && nextPosition.y !== 0:
            // если игрок не полностью вверху, шагаем вверх
                nextPosition.y--;
                break;
            case direction == 9 && nextPosition.y !== 0 && nextPosition.x !== 9:
            // если игрок не полностью вверху не полностью справа, шагаем вверх и вправо
                nextPosition.x++;
                nextPosition.y--;
        }

        return nextPosition;
    },
};