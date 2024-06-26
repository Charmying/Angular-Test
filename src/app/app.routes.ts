import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PageComponent } from './Pages/page/page.component';
import { OriginComponent } from './Pages/origin/origin.component';
import { ForLoopComponent } from './Pages/for-loop/for-loop.component';
import { IfConditionComponent } from './Pages/if-condition/if-condition.component';
import { FormGroupComponent } from './Pages/form-group/form-group.component';
import { InputOutputParentComponent } from './Pages/input-output-parent/input-output-parent.component';
import { PipeComponent } from './Pages/pipe/pipe.component';
import { DependencyInjectionComponent } from './Pages/dependency-injection/dependency-injection.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 首頁
  { path: 'origin', component: OriginComponent }, // 原 app.component
  { path: 'page', component: PageComponent }, // 測試建立新頁面
  { path: 'for-loop', component: ForLoopComponent }, // For 迴圈練習
  { path: 'if-condition', component: IfConditionComponent }, // if 判別式練習
  { path: 'FormGroup', component: FormGroupComponent }, // FormGroup 練習
  { path: 'InputOutputParent', component: InputOutputParentComponent }, // @Input() @Output() 練習
  { path: 'Pipe', component: PipeComponent }, // Pipe 練習
  { path: 'DependencyInjection', component: DependencyInjectionComponent }, // Dependency Injection 練習
];
