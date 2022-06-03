import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent} from './comp-c/comp-c.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comp-a' },
  {
    path: 'comp-a',
    component: CompAComponent
  },
  {
    path: 'comp-b',
    component: CompBComponent
  },
  {
    path: 'comp-c',
    component: CompCComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
