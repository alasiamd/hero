import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcardComponent } from './components/ecard/ecard.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    EcardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    EcardComponent
  ]
})
export class SharedModule { }
