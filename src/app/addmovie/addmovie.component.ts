import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent{
  mName:String="";
  mYear:number=0;
  movieId:String="";
  constructor(private dbService: DatabaseService, private router: Router) {}
  //Create a new Movie, POST request
  onSaveMovie() {
    let obj = { title: this.mName, year: this.mYear };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"])
    });
  }

}
