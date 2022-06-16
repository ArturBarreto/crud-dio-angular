import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '' 
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    });
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log("Usuário cadastrado com sucesso!" + result);
    }, (err) => {
      console.log(err);
    }, () => {
      this.userForm = this.fb.group({
        id: 0,
        nome: '',
        sobrenome: '',
        idade: '',
        profissao: '' 
      });
      this.getUsers();
    });
  }

}
