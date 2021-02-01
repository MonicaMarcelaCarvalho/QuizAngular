import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PainelFormService } from '../painel-form.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  
    public groupForm: FormGroup;

    public position: number;

    public question1:  AbstractControl;
    public question2:  AbstractControl;
    public question3:  AbstractControl;
    public questionA0: AbstractControl;
    public questionA1: AbstractControl;
    public questionA2: AbstractControl;
    public questionA3: AbstractControl;

    public booleanButton: boolean = true;
    public flag = [];
    public question = [];

    constructor(
        private fb: FormBuilder,
        private service: PainelFormService,
        public route: ActivatedRoute,
        private router: Router
    ) { 
        this.route.params.subscribe((params: Params) => {
            this.position = params.caminho;
        });
    }

    ngOnInit() {
        this.findById();
        this.findQuestion();
        this.configFormBuilder();
    }

    onSubmit(event) {
        event.preventDefault();
        if(!this.validateFormBeforeRequest()) return false;
        this.clickSalvar();
    }

    validateFormBeforeRequest(): boolean {
        if(!this.groupForm.valid) return false;
        return true;
    }

    clickVoltar() {
        this.router.navigate([`../`]);
    }

    findQuestion() {
        this.service.getFlagPegunta().subscribe(
            res => this.responseFlagSuccess(res),
            err => this.processErrorResponse(err)
        );
    }

    isClickQuestion(event) {
        return this[event].value;
    }

    private configFormBuilder() {
        const groupFormBuilder = {      
            question1:  [null , Validators.required],
            question2:  [null , Validators.required],
            question3:  [null , Validators.required],
            questionA0: [null , Validators.required],
            questionA1: [null , Validators.required],
            questionA2: [null , Validators.required],
            questionA3: [null , Validators.required],
        };

        this.groupForm = this.fb.group(groupFormBuilder);
        this.defineFormGroup(groupFormBuilder);
    }

    private defineFormGroup(group: any) {
        Object.keys(group).forEach(key => {
            this[key] = this.groupForm.controls[key];
        });
    }

    private clickSalvar() {
        this.booleanButton = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.groupForm.disable();
    }

    private findById() {
        this.service.getPegunta().subscribe(
            res => this.responseSearchSuccess(res),
            err => this.processErrorResponse(err)
        );
    }

    private responseSearchSuccess(res) {
        this.updateFormControl(res);
    }

    private responseFlagSuccess(res) {
        this.flag = res.questionFlag;
    }

    private updateFormControl(res) {
        this.question = res.questionForm;
    }

    private processErrorResponse(err) {
       alert(err);
    }

}
