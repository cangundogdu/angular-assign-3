import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";





export function nameValidator():ValidatorFn{
  return(control:AbstractControl): ValidationErrors | null => {
      const areNumbersPresent = control.value.match(/\d/g);
      if (areNumbersPresent){
          return {forbiddenCharacters: true};
      } else if (control.value.length > 15){
          return{exceedMaxLength: true};
      }else if (control.value.includes(" ")){
          return {spaces :true}
      }else if (control.value){
          return { empty:true}
      }

      return null;
  }
    
    }
  