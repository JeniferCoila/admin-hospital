import { Component } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})


export class SidebarComponent {
  navItems = navItems;
  constructor(public navService: NavService) {}

}
