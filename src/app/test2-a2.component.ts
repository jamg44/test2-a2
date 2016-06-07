import { Component } from '@angular/core';
import { HeroComponent } from './+hero';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { BatmanComponent } from './batman';
import { UsersComponent } from './users';

@Component({
  moduleId: module.id,
  selector: 'test2-a2-app',
  templateUrl: 'test2-a2.component.html',
  styleUrls: ['test2-a2.component.css'],
  directives: [ROUTER_DIRECTIVES, UsersComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/hero', component: HeroComponent},
  {path: '/batman', component: BatmanComponent}
])
export class Test2A2AppComponent {
  title = 'test2-a2 works!';
}
