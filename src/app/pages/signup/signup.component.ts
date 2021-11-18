import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
  ngOnInit(): void {
  }

  submitSignupForm( ) {
    
    if (this.user.firstName == '' || this.user.firstName == null ||
    this.user.lastName == '' || this.user.lastName == null ||
    this.user.username == '' || this.user.username == null ||
    this.user.password == '' || this.user.password == null ||
    this.user.email == '' || this.user.email == null ||
    this.user.phone == '' || this.user.phone == null) {
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: (data:any) => {
        console.log(data);
        Swal.fire({
          title: 'Success!',
          text: "User registration is successful! Your user id is "+data.id,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      },
      error: (e:HttpErrorResponse) => {
        console.error(e);
        Swal.fire({
          title: 'Error!',
          text: e.error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      },
      complete: () => {
        console.info('complete')
      }
    });

  }

}
