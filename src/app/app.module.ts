import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { UsersPage } from "../pages/users/users";
import { ReposPage } from "../pages/repos/repos";
import { OrganisationsPage } from "../pages/organisations/organisations";
import { UserDetailsPage} from "../pages/user-details/user-details";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsers } from '../providers/github-users/github-users';

import { HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
  ]
})
export class AppModule {}
