import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';
import { CategoriasComponent } from './categorias/categorias.component';



@NgModule({
  declarations: [
    NoticiaComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NoticiaComponent,
    CategoriasComponent
  ]
})
export class ComponentsModule { }
