import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AtualizacoesComponent } from './components/atualizacoes/atualizacoes.component';
import { CtaComponent } from './components/cta/cta.component';
import { LinksComponent } from './components/links/links.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { RecomendacoesComponent } from './components/recomendacoes/recomendacoes.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { TecnologiasComponent } from "./components/tecnologias/tecnologias.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CtaComponent,
    AboutMeComponent,
    ServicosComponent,
    LinksComponent,
    StacksComponent,
    ProjetosComponent,
    AtualizacoesComponent,
    RecomendacoesComponent,
    TecnologiasComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
