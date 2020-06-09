import { Pipe, PipeTransform } from '@angular/core';

//Pipe customizado
@Pipe({
    name: 'replace' /* Esse nome será utilizado no html, como se representasse uma chamada de método */
})

export class ReplacePipe  implements PipeTransform{
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char,valueToReplace);
    }
}