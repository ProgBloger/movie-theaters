import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }

  actors: actorDTO[];
  columnsToDisplay = ['name', 'actions'];
  
  ngOnInit(): void {
    this.actorsService.get().subscribe((actors: actorDTO[]) => {
      this.actors = actors;
    });
  }

  delete(id: BigInteger){

  }

}
