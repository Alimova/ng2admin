import { Routes, RouterModule } from '@angular/router';

import { DecoristComponent } from './decorist.component';

const routes: Routes = [
  {
    path: '',
    component: DecoristComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);