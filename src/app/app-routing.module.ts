import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { AddPlayerComponent } from './pages/add-player/add-player.component';

const routes: Routes = [
{path:"team",component:TeamComponent},
{path:'add', component:AddPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
