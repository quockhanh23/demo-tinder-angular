import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogComponent} from './dialog/dialog.component';
import {MaterialModule} from "./material/material.module";
import {ToastrModule} from "ngx-toastr";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './share/footer/footer.component';
import {HeaderComponent} from './share/header/header.component';
import {IntroComponent} from './share/intro/intro.component';
import {LoginComponent} from './share/login/login.component';
import {RegisterComponent} from './share/register/register.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import { ChatComponent } from './chat/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    UserListComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
