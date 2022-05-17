import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AddUserComponent } from './includes/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicHookDirective } from './shared/dynamic-hook.directive';
import { MailToPipe } from './shared/mail-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddUserComponent,
    DynamicHookDirective,
    MailToPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
