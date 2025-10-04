import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./share/login/login.component";
import {RegisterComponent} from "./share/register/register.component";
import {IntroComponent} from "./share/intro/intro.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {ChatComponent} from "./chat/chat/chat.component";

const routes: Routes = [
  {
    path: 'userDetail', component: UserDetailComponent,
  },
  {
    path: 'userList', component: UserListComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: '', component: IntroComponent,
  },
  {
    path: 'chat/:id', component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
