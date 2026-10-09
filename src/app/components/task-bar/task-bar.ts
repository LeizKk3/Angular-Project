import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-task-bar',
  styleUrl: './task-bar.css',
  templateUrl: './task-bar.html',
})
export class TaskBar {

  icons: string[] = [
    "../midia/img/alarm_1.svg",
    "../midia/img/alarm_3.svg",
    "../midia/img/alarm_4.svg",
    "../midia/img/alarme_2.svg",
    "../midia/img/dado.svg",
    "../midia/img/door.svg",
    "../midia/img/dormir.svg",
    "../midia/img/engrenagem.svg",
    "../midia/img/figma.svg",
    "../midia/img/key.svg",
    "../midia/img/pintar.svg",
    "../midia/img/stars.svg",
    "../midia/img/turn-off.svg"
  ]

  icons_length: number = this.icons.length - 1;
  warning: string = "";

  tasks: { nome: string; description: string; date: string; icon: number; important: boolean }[] = [];

  nomeInput: string = "";
  descriptionInput: string = "";
  dataInput: string = "";
  iconInput: number = 0;
  importantInput: boolean = false;


  adicionarTask() {

    if (this.nomeInput.length > 0 &&
      this.dataInput.length > 0
    ) {
      this.tasks.push({
        nome: this.nomeInput,
        description: this.descriptionInput,
        date: this.dataInput,
        icon: this.iconInput,
        important: this.importantInput
      });
      this.nomeInput = "";
      this.descriptionInput = "";
      this.dataInput = "";
      this.iconInput = 0;
      this.importantInput = false;
      this.warning = "";
    } else {
      this.warning = "*Preencha os campos obrigatórios!*";
    }
  }
}
