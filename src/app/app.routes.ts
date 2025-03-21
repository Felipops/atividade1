import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunosListComponent } from './components/aluno/alunos-list/alunos-list.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { AlunosFormComponent } from './components/aluno/alunos-form/alunos-form.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "principal", component: PrincipalComponent, children:[
        {path: "alunos", component: AlunosListComponent},
        {path: "alunos/new", component: AlunosFormComponent},
        {path: "alunos/edit/:id", component: AlunosFormComponent}
    ]}
];