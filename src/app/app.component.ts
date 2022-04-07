import { Component } from '@angular/core'; // importing component from core package.
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root', // This is the root folder where all the components are.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title='login';
  message:boolean=false;
  constructor(){

  }
    login=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.minLength(6)]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
  })


  ngOnInit(): void{}
  
  submit(){
    this.message=true;
  }
}