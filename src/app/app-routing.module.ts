import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StepperComponent } from './pages/stepper/stepper.component'

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'stepper', component: StepperComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'stepper'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
