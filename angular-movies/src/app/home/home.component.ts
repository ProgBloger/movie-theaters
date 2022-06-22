import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 14.99,
      poster: "",
    },
    {
      title: 'Godzilla',
      releaseDate: new Date('2016-05-23'),
      price: 15.99,
    }];  

    this.moviesFutureReleases = [{
      title: 'Venom',
      releaseDate: new Date(),
      price: 144.99
    },
    {
      title: 'Avangers',
      releaseDate: new Date('2018-05-23'),
      price: 155.99,
    },
    {
      title: 'Creeper-Man',
      releaseDate: new Date(),
      price: 14.99
    },
    {
      title: 'Modzilla',
      releaseDate: new Date('2016-05-23'),
      price: 15.99,
    }];
  }

  moviesInTheaters;
  moviesFutureReleases;

}
