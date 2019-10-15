import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addatm',
  templateUrl: './addatm.component.html',
  styleUrls: ['./addatm.component.css']
})
export class AddatmComponent implements OnInit {
  fullName:String="";
  bYear:number=0;
  actorId:String="";

  mName:String="";
  mYear:number=0;
  movieId:String="";

  constructor(private dbService: DatabaseService, private router: Router) { }
  actorsDB: any[] = [];
  moviesDB: any[] = [];

  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onSelectA(item) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onSelectM(item) {
    this.mName = item.title;
    this.mYear = item.year;
    this.movieId = item._id;
  }

  //Add movie to actor 
  onMovieToActor() {
    let obj = {_id:this.movieId};
    this.dbService.addMovieToActor(this.actorId,obj).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });

  }

  onActorToMovie() {
    let obj = {_id:this.movieId};
    this.dbService.addMovieToActor(this.actorId,obj).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });
    let obj1 = {_id:this.actorId};
    this.dbService.addActorToMovie(this.movieId,obj1).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });
  }

  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }

}
