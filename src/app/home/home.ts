import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui!

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // E adicione ele nos imports do componente
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Requisito 1: Lista de notícias pré-definidas no TS 
  noticias = [
    {
      titulo: 'Angular Lança Nova Versão com Foco em Performance', // [cite: 6]
      autor: 'Equipe Angular', // [cite: 7]
      dataPublicacao: '18/09/2025', // [cite: 8]
      conteudo: 'A nova versão do Angular, v19, promete melhorias significativas na velocidade de renderização e no tamanho final do bundle, trazendo mais eficiência para os desenvolvedores.', // [cite: 9]
      curtidas: 0, // [cite: 10]
      comentarios: [], // [cite: 11]
      novoComentario: '' // Propriedade para o two-way binding do comentário
    },
    {
      titulo: 'IA Generativa Transforma o Mercado de Trabalho',
      autor: 'Ana Livia',
      dataPublicacao: '17/09/2025',
      conteudo: 'Ferramentas de IA generativa estão mudando a forma como criamos conteúdo, código e arte. Profissionais de diversas áreas precisam se adaptar a essa nova realidade.',
      curtidas: 0,
      comentarios: ['Ótima matéria!', 'Estou usando no meu dia a dia.'],
      novoComentario: ''
    },
    {
      titulo: 'Dicas para Manter o Foco no Home Office',
      autor: 'Carlos Silva',
      dataPublicacao: '15/09/2025',
      conteudo: 'Trabalhar de casa pode ser um desafio. Especialistas recomendam criar um ambiente dedicado, estabelecer horários fixos e fazer pausas regulares para manter a produtividade.',
      curtidas: 0,
      comentarios: [],
      novoComentario: ''
    }
  ];

  // Função para incrementar o número de curtidas [cite: 15]
  curtirNoticia(noticia: any) {
    noticia.curtidas++;
  }

  // Função para adicionar um novo comentário [cite: 16]
  adicionarComentario(noticia: any) {
    // Adiciona o comentário apenas se o campo não estiver vazio
    if (noticia.novoComentario.trim() !== '') {
      noticia.comentarios.push(noticia.novoComentario);
      noticia.novoComentario = ''; // Limpa o campo de texto após adicionar
    }
  }
}