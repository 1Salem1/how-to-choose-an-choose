import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { Content2Component } from './content2/content2.component';
import { SkiResultComponent } from './ski-result/ski-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkiLevelComponent } from './ski-level/ski-level.component';
import { TerrainTypeComponent } from './terrain-type/terrain-type.component';
import { SkiStyleComponent } from './ski-style/ski-style.component';
import { RidingSpeedComponent } from './riding-speed/riding-speed.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    Content2Component,
     SkiResultComponent,
     SkiLevelComponent,
     TerrainTypeComponent,
     SkiStyleComponent,
     RidingSpeedComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

