import { Component, OnInit } from '@angular/core';

interface Projeto {
  titulo: string;
  tecnologias: string;
  descricao: string;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetos: Projeto[] = [
    {
      titulo: 'Projeto A',
      tecnologias: 'Angular, TypeScript',
      descricao: 'Descrição do Projeto A.',
      imagem: 'assets/projeto-a.png',
      link: 'https://github.com/devjuliusotto/cv'
    },
    // Adicione mais projetos conforme necessário
  ];

  constructor() { }

  ngOnInit(): void { }
}
