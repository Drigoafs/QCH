import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { IngredientsService } from '../core/services/ingredients.service';
import { RecipesService } from '../core/services/recipes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TabsPage],
  providers: [IngredientsService,RecipesService]
})
export class TabsPageModule {}
