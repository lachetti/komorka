import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { BodyTuningComponent } from './body-tuning.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BodyTuningComponent },
];

@NgModule({
  declarations: [
    ExerciseCardComponent,
    BodyTuningComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class BodyTuningModule {}
