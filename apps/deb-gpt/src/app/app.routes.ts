import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {path:'',loadChildren: () => import('@deb-gpt/auth').then(m => m.AuthModule),outlet:"authOutlet"},
  {path:'',loadChildren: () => import('@deb-gpt/core').then(m => m.CoreModule),outlet:"contentOutlet"},
];
