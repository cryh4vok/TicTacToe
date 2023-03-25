import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-raised-button style="height:100%; width:100%" color="primary">
      {{ value }}
    </button>
  `,
  styles: [],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
