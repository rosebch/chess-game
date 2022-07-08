import { Cell } from './Cell';
import { Colors } from './Colors';

export class Board {
    cells: Cell[][] = [] //Двумерный массив ячеек

    public initCells() {
        for(let i = 0; i < 8; i++) { 
            const row: Cell[] = [] //Одномерный массив ячеек для ряда
            for (let j = 0; i < 8; j++) { //Цикл по ряду
                if((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) //Черные ячейки
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) //Белые ячейки
                }
            }
            this.cells.push(row) //Пушим ряды в cells
        }
    }
}