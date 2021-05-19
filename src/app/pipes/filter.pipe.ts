import { Pipe, PipeTransform } from '@angular/core';
import { NoteDetailsModule } from '../models/note.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
   transform(items: NoteDetailsModule[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.title.toLocaleLowerCase().includes(searchText) || item.body.toLocaleLowerCase().includes(searchText);
    });
  }

}
