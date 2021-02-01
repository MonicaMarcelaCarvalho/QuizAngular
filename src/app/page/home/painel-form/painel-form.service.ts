import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionFlag, QuestionForm } from './painel-form.model';

@Injectable({ providedIn: 'root' })
export class PainelFormService {

    public questionJson = 'assets/questionForm.json';
    public flagJson     = 'assets/questionFlag.json';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private http: HttpClient
    ) {}

    public getPegunta(): Observable<QuestionForm> {
        return this.http.get<QuestionForm>(this.questionJson);
    }

    public getFlagPegunta(): Observable<QuestionFlag> {
        return this.http.get<QuestionFlag>(this.flagJson);
    }

}

