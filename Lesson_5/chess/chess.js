'use strict';

const chess = {

    containerElement: document.getElementById('board'),

    run() {
        this.init();
    },

    init() {
        this.initBoard();
    },

    initBoard() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < rows.length; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < cols.length; col++) {
                const tdElem = document.createElement('td');
                trElem.appendChild(tdElem);

                if (cols[col] === 0 || rows[row] === 0) {
                    tdElem.style.width = '40px';
                    if (rows[row] === 0 & cols[col] !== 0) {
                        tdElem.innerHTML = cols[col];
                    } else if (rows[row] !== 0 & cols[col] === 0) {
                        tdElem.innerHTML = rows[row].toString();
                    } else {
                        tdElem.style.backgroundColor = 'SaddleBrown';
                    }
                }

                if (this.isCellIsBlack(row, col)) {
                    tdElem.style.backgroundColor = 'SaddleBrown';
                }
            };
        };
    },

    isCellIsBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }
        return ((colNum + rowNum) % 2 === 1);
    },
};

chess.run();
