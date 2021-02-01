import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { TermDialogComponent } from './term-dialog/term-dialog.component';
import { PainelFormService } from './painel-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-form',
  templateUrl: './painel-form.component.html',
  styleUrls: ['./painel-form.component.css']
})
export class PainelFormComponent implements OnInit {

  constructor(
    private service: PainelFormService,
    public sanitizer: DomSanitizer,
    private router: Router, 
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  clickTermoNao(){
    // Ao escolher “NAO”, o usuário deverá ser redirecionado para a tela #4
    const dialogRef = this.dialog.open(TermDialogComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Fechar o Registro");
    });
  }

  clickTermoSim() {
    // Ao escolher “SIM”, o usuário deverá ser redirecionado para a tela #3
    this.router.navigate([`/question/0`]);
  }
}
