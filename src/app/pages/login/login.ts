import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [RouterLink, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   authService=inject(Auth);
   hide=true;
   form!:FormGroup;
   fb = inject(FormBuilder);
   matSnackbar=inject(MatSnackBar)
   router=inject(Router)

   login(){
    this.authService.login(this.form.value).subscribe({
      next:(response)=>{
        this.matSnackbar.open(response.message, 'close',{
          duration:5000,
          horizontalPosition:'center'
        })

        this.router.navigate(['/'])
      },

      error:(error)=>{
        this.matSnackbar.open(error.error.message, 'close', {
          duration:5000,
          horizontalPosition:'center',
        })
      }
    });
   }

   ngOnInit(): void{
     this.form =this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
     })
   }
}
