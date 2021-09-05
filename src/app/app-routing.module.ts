import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent} from './content/content.component'
import {Content2Component} from  './content2/content2.component'
import { SkiResultComponent } from './ski-result/ski-result.component';
import { SkiLevelComponent } from './ski-level/ski-level.component';
import { TerrainTypeComponent } from './terrain-type/terrain-type.component';
import { SkiStyleComponent } from './ski-style/ski-style.component';
import { RidingSpeedComponent } from './riding-speed/riding-speed.component';
const routes: Routes = [
{ path: 'step1',   component:ContentComponent   , data : {animation : 'isRight'}},
{ path: 'step2',    component:Content2Component  , data :{animation : 'isLeft'}},
{ path: 'terrain',   component:TerrainTypeComponent  , data :{animation : 'isRight'}},
{ path: 'riding',   component:RidingSpeedComponent   , data :{animation : 'isRight'}},
{ path: 'style',   component:SkiStyleComponent   , data :{animation : 'isRight'}},
 { path: 'SkiLevel', component:SkiLevelComponent  , data :{animation : 'isRight'}},
 { path: 'result',   component:SkiResultComponent , data :{animation : 'isRight'}},
 { path: '',         component:ContentComponent , data : {animation : 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }