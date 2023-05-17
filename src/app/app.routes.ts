import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  { path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro-aluno',
    loadComponent: () => import('./cadastro-aluno/cadastro-aluno.page').then( m => m.CadastroAlunoPage)
  },
  {
    path: 'cadastro-professor',
    loadComponent: () => import('./cadastro-professor/cadastro-professor.page').then( m => m.CadastroProfessorPage)
  },
  {
    path: 'cadastro-turmas',
    loadComponent: () => import('./cadastro-turmas/cadastro-turmas.page').then( m => m.CadastroTurmasPage)
  },
  {
    path: 'cadastro-usuario',
    loadComponent: () => import('./cadastro-usuario/cadastro-usuario.page').then( m => m.CadastroUsuarioPage)
  },
  {
    path: 'turmas',
    loadComponent: () => import('./turmas/turmas.page').then( m => m.TurmasPage)
  },

];
