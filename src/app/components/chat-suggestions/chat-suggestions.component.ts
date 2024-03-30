import { Component } from '@angular/core';
import { ExperienceComponent } from '../../icons/experience/experience.component';
import { CommonModule } from '@angular/common';
import { StudyComponent } from '../../icons/study/study.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    StudyComponent,
    CuriosityComponent
  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {

  suggestionTopics = [
    {
      title: "Experiência",
      icon: "experience",
      questions: [
        "Carlos tem experiência com Java?",
        "Qual a última experiência profissional de Carlos?",
        "Carlos está trabalhando em qual empresa atualmente?"
      ]
    },
    {
      title: "Acadêmico",
      icon: "study",
      questions: [
        "Carlos é formado em que?",
        "Carlos possuí pós graduação?",
        "Carlos está estudando no momento?"
      ]
    },
    {
      title: "Curiosidades",
      icon: "curiosity",
      questions: [
        "Qual a idade de Carlos?",
        "Quais países Carlos visitou?"
      ]
    }
  ]
}
