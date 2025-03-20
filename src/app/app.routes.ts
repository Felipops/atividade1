import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunosListComponent } from './components/aluno/alunos-list/alunos-list.component';
import { MenuComponent } from './components/layout/menu/menu.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "menu", component: MenuComponent},
    {path: "principal", component: PrincipalComponent, children:[
        {path: "alunos", component: AlunosListComponent},
        {path: "alunos/new", component: AlunosListComponent}
    ]}
];