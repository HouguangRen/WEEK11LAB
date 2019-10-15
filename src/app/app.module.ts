import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { AddATMComponent } from './add-atm/add-atm.component';
import { AddatmComponent } from './addatm/addatm.component';
const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "addatm", component: AddatmComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", redirectTo: "pagenotfound"},
];
@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    PagenotfoundComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    AddATMComponent,
    AddatmComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}