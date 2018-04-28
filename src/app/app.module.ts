import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppRoutingModule } from './shared/app.routing';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTable } from './datatable-resource/datatable';
import { DataTableModule } from './data-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientService } from './client/client.service';
import { AddClientComponent } from './client/add-client/add-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { JwtInterceptor } from './shared/jwt.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    DataTable,
    ClientListComponent,
    AddClientComponent,
    EditClientComponent,
    AppsettingsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    DataTableModule,
    SimpleNotificationsModule.forRoot(),
    NgxMyDatePickerModule.forRoot()
  ],
  providers: [AuthenticationService,UserService,ClientService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
