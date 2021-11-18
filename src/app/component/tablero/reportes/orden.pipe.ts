import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orden'
})
export class OrdenPipe implements PipeTransform {

transform(value:String,...args:unknown []): unknown{
console.log(value);
  
  
  return (value) ? 'Esta seguro de modificar cambios' : 'MODIFICANDO';

}

}