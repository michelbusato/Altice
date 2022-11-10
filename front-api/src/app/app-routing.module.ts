import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiApiComponent}  from './gui-api/gui-api.component'
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: "", component: GuiApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
