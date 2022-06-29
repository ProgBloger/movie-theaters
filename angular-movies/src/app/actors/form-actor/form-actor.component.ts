import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: actorDTO;

  @Output()
  onSaveChanges:EventEmitter<actorCreationDTO> = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });
  }

  changeMarkdown(event: Event) {
    var content = (event.target as HTMLInputElement).value;
    this.form.get('biography')?.setValue(content);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image) {
    this.form.get('picture')?.setValue(image);
  }
}
