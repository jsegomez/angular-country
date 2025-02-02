import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {
  public placeholder = input<string>('Buscar');
  public sendInputValue = output<string>();
  public inputValue = signal<string>('');

  debounceEffect = effect((onClean) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => this.sendInputValue.emit(value), 1000);
    onClean(() => clearTimeout(timeout));
  });
}
