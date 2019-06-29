import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MymatModule } from './modules/mymat.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PostService } from './services/post.service';
import { ActorService } from './services/actor.service';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ActorlistComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymatModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostService,
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
