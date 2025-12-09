import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { HomeComponent } from './home.component';
import { PromocoesComponent } from './promocoes/promocoes.component';

@NgModule({
    declarations: [
        PromocoesComponent,
        DepoimentosComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        PromocoesComponent,
        DepoimentosComponent,
        HomeComponent
    ]
}) export class HomeModule {}
