import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { Router } from '@angular/router'
import { UserAuthService } from '@youpez/services/user-auth.service'

@Component({
  selector: 'app-layout-mini-sidebar',
  templateUrl: './layout-mini-sidebar.component.html',
  styleUrls: ['./layout-mini-sidebar.component.scss']
})
export class LayoutMiniSidebarComponent implements OnInit {

  @Output() itemClick: EventEmitter<any> = new EventEmitter()



  public loading: boolean = false

  constructor(public userAuthService: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onItemClick(event) {
    this.itemClick.next(event)
  }

  onFakeLoading() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }

  logout() {
    this.userAuthService.clear();
    this.router.navigate(['/auth/modern/login'])
  }

}
