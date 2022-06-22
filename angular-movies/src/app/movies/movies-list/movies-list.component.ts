import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input()
  movies;

  remove(index: number){
    this.movies.splice(index, 1);
  }

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }
}
