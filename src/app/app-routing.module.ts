import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './componentes/charts/charts.component';
import { TablesComponent } from './componentes/tables/tables.component';
import { WidgetsComponent } from './componentes/widgets/widgets.component';
import { AuthenticationRegisterComponent } from './componentes/authentication-register/authentication-register.component';
import { AuthenticationLoginComponent } from './componentes/authentication-login/authentication-login.component';
import { Error403Component } from './componentes/error403/error403.component';
import { Error404Component } from './componentes/error404/error404.component';
import { Error405Component } from './componentes/error405/error405.component';
import { Error500Component } from './componentes/error500/error500.component';
import { FormBasicComponent } from './componentes/form-basic/form-basic.component';
import { FormWizardComponent } from './componentes/form-wizard/form-wizard.component';
import { GridComponent } from './componentes/grid/grid.component';
import { IconFontawesomeComponent } from './componentes/icon-fontawesome/icon-fontawesome.component';
import { IconMaterialComponent } from './componentes/icon-material/icon-material.component';
import { PagesButtonsComponent } from './componentes/pages-buttons/pages-buttons.component';
import { PagesCalendarComponent } from './componentes/pages-calendar/pages-calendar.component';
import { PagesChatComponent } from './componentes/pages-chat/pages-chat.component';
import { PagesElementsComponent } from './componentes/pages-elements/pages-elements.component';
import { PagesGalleryComponent } from './componentes/pages-gallery/pages-gallery.component';
import { PagesInvoiceComponent } from './componentes/pages-invoice/pages-invoice.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'index' , component: InicioComponent },
  { path: 'charts' , component: ChartsComponent },
  { path: 'tables' , component: TablesComponent },
  { path: 'widgets' , component: WidgetsComponent },
  { path: 'authentication-login' , component: AuthenticationLoginComponent  },
  { path: 'authentication-register' , component: AuthenticationRegisterComponent },
  { path: 'error-403' , component: Error403Component },
  { path: 'error-404' , component: Error404Component },
  { path: 'error-405' , component: Error405Component },
  { path: 'error-500' , component: Error500Component  },
  { path: 'pages-gallery' , component: PagesGalleryComponent },
  { path: 'pages-calendar' , component: PagesCalendarComponent },
  { path: 'pages-invoice' , component: PagesInvoiceComponent },
  { path: 'pages-chat' , component: PagesChatComponent },
  { path: 'icon-material' , component: IconMaterialComponent },
  { path: 'icon-fontawesome' , component: IconFontawesomeComponent },
  { path: 'form-basic' , component: FormBasicComponent },
  { path: 'form-wizard' , component: FormWizardComponent },
  { path: 'grid' , component: GridComponent },
  { path: 'pages-elements' , component: PagesElementsComponent },
  { path: 'pages-buttons' , component: PagesButtonsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
