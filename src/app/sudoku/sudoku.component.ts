import { Component, OnInit } from '@angular/core';
import { SudokuDTO } from './SudokuDTO';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {

  sudokuDTO: SudokuDTO;

  private numberArray = [1, 2, 3, 4, 5 , 6 , 7, 8, 9]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sudokuDTO = new SudokuDTO();
  }

  refresh = () => {
    this.sudokuDTO = new SudokuDTO();
  }

  solve = () => {
    console.log('sudokuDTO: ', JSON.stringify(this.sudokuDTO));

    let isInvalid = false;

    const board = this.sudokuDTO.board;    
    board.forEach((row: number[]) => {
      row.forEach((cell: number) => {
        if (cell && this.numberArray.indexOf(cell) === -1 ) {
          isInvalid = true;
        }
      });
    });

    if (isInvalid) {
      alert('Invalid sudoku board!');
    } else {
      this.http.post('/sudokusolver', this.sudokuDTO).subscribe(
        (response: SudokuDTO) => {
          console.log('Success response from API: ' , response);
          this.sudokuDTO = response;
        },
        (error) => {
          console.log('Error response from API: ' , error);
          alert(error.error.error);
        }
      );
    }
  }

}
