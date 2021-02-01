import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PainelFormService } from '../painel-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-term-dialog',
  templateUrl: './term-dialog.component.html',
  styleUrls: ['./term-dialog.component.scss']
})
export class TermDialogComponent implements OnInit {
  
  public indTermo: boolean;

  constructor(
    public dialogRef: MatDialogRef<TermDialogComponent>,
    private fb: FormBuilder,
    private service: PainelFormService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  isDisabled() {
    return this.indTermo !== true;
  }

  isRouter() {
    this.dialogRef.close(true);
    this.router.navigate([`/question/1`]);
  }

  onChangeChecker(value: MatCheckboxChange) {
    this.indTermo = value.checked === true ? true : false;
  }

  close() {
    this.dialogRef.close(true);
  }
}
