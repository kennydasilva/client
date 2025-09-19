import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [RouterLink, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   hide=true;
   form!:FormGroup;
   fb = inject(FormBuilder);

   login(){}

   ngOnInit(): void{
     this.form =this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
     })
   }
}
