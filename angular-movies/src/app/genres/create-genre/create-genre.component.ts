import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  errors: string[] = [];

  constructor(private router: Router, genresService: GenresService) { 
    this.genresService = genresService;
  }

  genresService: GenresService;

  form: FormGroup;

  ngOnInit(): void {
    
  }

  saveChanges(generateCreationDTO: genreCreationDTO) {
    this.genresService.create(generateCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => this.errors = parseWebAPIErrors(error));
  }
}
