import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'User 1';
  color = "blue";

    mudarNome(){
      if(this.nome == 'user1')
        this.nome = "user2";
      else this.nome = 'user1';  

    }
}

