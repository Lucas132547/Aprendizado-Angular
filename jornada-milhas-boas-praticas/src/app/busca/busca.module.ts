import { NgModule } from "@angular/core";
import { BuscaComponent } from "./busca.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

NgModule ({
    declarations: [
        BuscaComponent,
        PassagemComponent,
        PassagemDestaqueComponent,
        CompanhiasComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        FiltrosComplementaresComponent

    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        ReactiveFormsModule
        
    ],
    exports: [
        BuscaComponent,
        PassagemComponent,
        PassagemDestaqueComponent,
        CompanhiasComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        FiltrosComplementaresComponent
    ]
})

export class BuscaModule {}