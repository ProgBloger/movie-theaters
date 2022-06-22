import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = { title: 'Spider-Man', inTheaters: true, summary: "whatever",
releaseDate: new Date(), trailer: 'ABCDE', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKPJ_JZCdvgBhFZsHN9_LNXz3IQUM-w25vnKLiGTwrzpGkgdKdclugBDDn8c3ByMXqHo&usqp=CAU' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {

  }

}
