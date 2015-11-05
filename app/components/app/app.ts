import {Component, ViewEncapsulation, TemplateRef} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {HomePage} from '../home/home';
import {FormPage} from '../form/form';
import {AuthPage} from '../auth/auth';
import {ChartPage} from '../chart/chart';
import {TablePage} from '../table/table';
import {ButtonsPage} from '../buttons/buttons';
import {NotificationsPage} from '../notifications/notifications';
import {TypographyPage} from '../typography/typography';
import {IconsPage} from '../icons/icons';
import {GridPage} from '../grid/grid';
import {Header} from '../header/header';
import {NameList} from '../../services/name_list';
import {PanelsWellsPage} from '../panels-wells/panels-wells';

@Component({
  selector: 'app',
  viewBindings: [NameList],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [Header, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: '/home' },
  { path: '/home', component: HomePage, as: 'Dashboard.home' },
  { path: '/form', component: FormPage, as: 'Dashboard.form' },
  { path: '/blank', component: HomePage, as: 'Dashboard.blank' },
  { path: '/login', component: AuthPage, as: 'Auth' },
  { path: '/chart', component: ChartPage, as: 'Dashboard.chart' },
  { path: '/table', component: TablePage, as: 'Dashboard.table' },
  { path: '/panels-wells', component: PanelsWellsPage, as: 'Dashboard.panels-wells' },
  { path: '/buttons', component: ButtonsPage, as: 'Dashboard.buttons' },
  { path: '/notifications', component: NotificationsPage, as: 'Dashboard.notifications' },
  { path: '/typography', component: TypographyPage, as: 'Dashboard.typography' },
  { path: '/icons', component: IconsPage, as: 'Dashboard.icons' },
  { path: '/grid', component: GridPage, as: 'Dashboard.grid' }
])
export class App {
  public headingTemplate:TemplateRef;
}
