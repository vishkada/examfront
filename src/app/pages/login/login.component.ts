import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }
  
  public user = {
    username: '',
    password: ''    
  }
  ngOnInit(): void {
  }

  public submitLoginForm(){
    if(this.user.username=='' || this.user.username==null || this.user.password=='' || this.user.password==null){
      return;
    }
    const Toast = Swal.mixin({
         toast: false,
         position: 'center',
         timer: 3000,
        timerProgressBar: false
       })
       Toast.fire('Invalid username or password!', 'ok', 'error')
  }

}
