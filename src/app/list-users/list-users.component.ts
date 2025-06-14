import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/iusuario';
import { ListUsersService } from '../services/list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  constructor(private userService: ListUsersService){}
  
  displayedColumns = [`id`, `first_name`, `last_name`, `email`];

  dataSource: IUsuario[] = [];

  // listaUsuarios: IUsuario[] = [
  //   // {
  //   //   id: 1,
  //   //   first_name: "sexo",
  //   //   last_name: "kk",
  //   //   email: "teste@gmail.com"
  //   // },
  //   // {
  //   //   id:2,
  //   //   first_name: "hahha",
  //   //   last_name: "penis",
  //   //   email: "penisdasilva@gmail.com"
  //   // }
  // ];

  listarUsuarios(): void {
    this.userService.listarUsuarios().subscribe((dados) => {
      this.dataSource = dados;
    })
  }

  // execList(): void {
  //   this.dataSource = this.listarUsuarios;
  // };

  ngOnInit(): void {
    this.listarUsuarios();
  };
}
