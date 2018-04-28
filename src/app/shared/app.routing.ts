import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { ClientListComponent } from '../client/client-list/client-list.component';
import { AddClientComponent } from '../client/add-client/add-client.component';
import { EditClientComponent } from '../client/edit-client/edit-client.component';
import { AuthGuardService } from './auth-guard.service';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'clients', component: ClientListComponent, canActivate: [AuthGuardService] },
            { path: 'clients/add', component: AddClientComponent, canActivate: [AuthGuardService] },
            { path: 'clients/edit/:id', component: EditClientComponent, canActivate: [AuthGuardService] },
            { path: '' , component: HomeComponent, canActivate: [AuthGuardService]},
            { path: 'register',component:RegisterComponent},
            { path: 'login',component:LoginComponent},
            { path: '**' , component: ErrorComponent }
        ]),
        NgxMyDatePickerModule.forRoot()    
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ]
})
export class AppRoutingModule {}