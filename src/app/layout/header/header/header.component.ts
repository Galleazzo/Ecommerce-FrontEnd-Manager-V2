import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { LayoutMiniSidebarComponent } from '../../menu/layout-mini-sidebar/layout-mini-sidebar.component'
import { UserAuthService } from '@youpez/services/user-auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter()
  @Output() itemClick: EventEmitter<any> = new EventEmitter()

  constructor(public userAuthService: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSideBarToggle($event) {
    this.menuClick.next(true)
  }

  onItemClick(event) {
    this.itemClick.next(event)
  }

  logout() {
    this.userAuthService.clear();
    this.router.navigate(['/auth/login'])
  }
}
