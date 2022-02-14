import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'module'
})
export class ModulePipe implements PipeTransform {

  transform(value: any, hotelsearch:any):any {
    if(value.length ===0){ 
          return value
       }
else{ 

  
  return value.filter((search)=>{
    return search.name.toLowerCase().indexOf(hotelsearch) > -1
  });

}
  
  }

}



// const hotels = [];
// if(value === [] || hotelsearch ===''){ 
//     return value;
// }

// for (const items of value){
//   if(items['name'] === hotelsearch){
//       hotels.push(items);
//   }
  
// }
// return hotels; 