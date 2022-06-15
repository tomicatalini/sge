import { Component, Injectable, NgModule, OnInit } from '@angular/core';
// import { localize } from '@angular/localize';

import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`Primer Página`;
  itemsPerPageLabel = $localize`Items por página:`;
  lastPageLabel = $localize`Última Página`;

  nextPageLabel = 'Siguiente';
  previousPageLabel = 'Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}

@Component({
  selector: 'spanish-pagination',
  templateUrl: './spanish-pagination.component.html',
  styleUrls: ['./spanish-pagination.component.css']
})
export class SpanishPaginationComponent{}