import {Component, OnInit} from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
  NgForm
} from "@angular/forms"
import {Router} from '@angular/router'
import { UserAuthService } from '@youpez/services/user-auth.service'
import { UserService } from '@youpez/services/user.service'

import {NotificationService} from "carbon-components-angular"

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService,
              private userService: UserService,
              private userAuthService: UserAuthService,
              ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    }, {updateOn: 'blur'})
  }

  onSubmit(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe((response: any) => {
        this.userAuthService.setToken(response.token);

        this.notificationService.showToast({
          type: "info",
          title: "Seja bem vindo! ✔",
          subtitle: "Tudo bem com voce? 🥰",
          target: "#notificationHolder",
          message: "message",
          duration: 5000,
        })
           
        this.router.navigate(['/app/dashboard/default']);
      },(error) => {
        this.notificationService.showToast({
          type: "error",
          title: "Negado ❌",
          subtitle: "Verifique seu email ou senha de acesso!",
          target: "#notificationHolder",
          message: "message",
          duration: 5000,
        })
      }
    );
    this.formGroup.markAllAsTouched()
    
    
  }

  isValid(name) {
    const instance = this.formGroup.get(name)
    return instance.invalid && (instance.dirty || instance.touched)
  }
}
