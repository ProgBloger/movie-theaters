import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})

export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  actors = [
    { name: 'Tom Holland', picture: 'https://th.bing.com/th/id/OIP.HTnWOqf19fApvw8WeRE7ggHaLI?w=115&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Tom Hanks', picture: 'https://th.bing.com/th?id=OIF.b%2f1zPBbPNWU9hSdrWfKDHw&w=279&h=180&c=7&r=0&o=5&pid=1.7' },
    { name: 'Samuel L. Jackson', picture: 'https://th.bing.com/th/id/OIP.GXjEIlATw0gSBN4Z_8nSmwHaLH?w=133&h=200&c=7&r=0&o=5&pid=1.7' },
  ]

  selectedActors: actorCreationDTO[] = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor) {
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>) {
    const previousIndex =this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
