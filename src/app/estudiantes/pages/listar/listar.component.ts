import { Component, OnInit } from '@angular/core';
import { MockamockapiService } from '../../../services/mockamockapi.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  estudiantesList: any;

  constructor( private mockamockapiService: MockamockapiService) {
   }

  ngOnInit(): void {
   
this.mockamockapiService.getEstudiantes()
.subscribe((response:any) => this.estudiantesList = response)

}
}
