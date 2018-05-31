import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  post = [
      {
        title: 'Mon premier post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        loveIt: 1,
        created_at: new Date()
      },
      {
          title: 'Mon deuxième post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          loveIt: 0,
          created_at: new Date()
      },
      {
          title: 'Mon troisième post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          loveIt: -1,
          created_at: new Date()
      }
  ]
}
