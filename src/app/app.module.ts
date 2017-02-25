import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstSubPagePage } from '../pages/first-sub-page/first-sub-page';
import { SecondSubPagePage } from '../pages/second-sub-page/second-sub-page';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FirstSubPagePage,
    SecondSubPagePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FirstSubPagePage,
    SecondSubPagePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
