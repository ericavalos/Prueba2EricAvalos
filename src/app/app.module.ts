import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TablesComponent,
    WidgetsComponent,
    AuthenticationRegisterComponent,
    AuthenticationLoginComponent,
    Error403Component,
    Error404Component,
    Error405Component,
    Error500Component,
    FormBasicComponent,
    FormWizardComponent,
    GridComponent,
    IconFontawesomeComponent,
    IconMaterialComponent,
    PagesButtonsComponent,
    PagesCalendarComponent,
    PagesChatComponent,
    PagesElementsComponent,
    PagesGalleryComponent,
    PagesInvoiceComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
