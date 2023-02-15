import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyTuningModule } from './modules/body-tuning/body-tuning.module';

const routes: Routes = [
  { path: 'body-tuning', loadChildren: () => BodyTuningModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
