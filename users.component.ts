import { Component, OnInit } from '@angular/core';
import { Database ,set,ref,update,onValue,remove} from '@angular/fire/database';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private fb:FormBuilder,public database :Database) { }

  ngOnInit(): void {
  }

  registerUser(value :any){

    set(ref(this.database, 'users/' + value.Name), {
      Name: value.Name,
      Age: value.Age,
      Score : value.Score
    });

    alert('user created!')
  }

  user1:any;

  search :any =undefined

  userForm:any=this.fb.group(
    {
      'Name':this.fb.control("",Validators.required),
      'Age':this.fb.control("",Validators.required),
      'Score':this.fb.control("",Validators.required),
    }
  )
  submit(data:any)
  {
    this.user1.push(data)
  }

}
