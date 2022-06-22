import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = { name: 'Agora', latitude: 51.11082994993973, longitude: 17.030954360961918 };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    })
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    
  }

}
