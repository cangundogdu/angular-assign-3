import { Component, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { take } from 'rxjs';
import { nameValidator } from 'src/app/validators/validators';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  dataStore: any;

  constructor() { }

 

get f(){

    return this.form.controls;

  }

  

  submit(){
    
    console.log(this.form.value);



    console.log("can"); 

    
    this.dataStore.saveName({

      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value

    })
    
    this.dataStore.saveAddress({

      address: this.form.get('address')?.value,
      city: this.form.get('city')?.value,
      postalCode: this.form.get('postalCode')?.value,
      country:this.form.get('country')?.value
    })

    this.dataStore.saveCreditCard({

      visaorMaster: this.form.get('visaorMaster')?.value,
      creditCardNumber: this.form.get('creditCardNumber')?.value,
      expiry: this.form.get('expiry')?.value,
      cvc: this.form.get('CVC')?.value,
      nameonCard: this.form.get('nameonCard')?.value

    })

  }

form!:FormGroup;

  ngOnInit(): void {
    
    this.form = new FormGroup({

    firstName: new FormControl('',[nameValidator(),Validators.required]),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl(''),
    visaorMaster: new FormControl(''),
    creditCardNumber: new FormControl(''),
    expiry: new FormControl(''),
    cvc: new FormControl(''),
    nameonCard: new FormControl('') 

  });

  }
populateSavedAddress(){

  this.dataStore.getLastAddress().pipe(
    take(1)
  ).subscribe((address: { postalCode: any; }) => {
    this.form.get('postalCode')?.setValue(address.postalCode)

  })

}

isFormValid(){
  console.log(this.form.valid);
}



}





function numeric(): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}
/*
@Directive({
  selector : '[Firstname]'
})
export class FirstnameDirective{
  @Input() maxChars = 10;
  constructor(private eI:ElementRef,private renderer:Renderer2){}

  @HostListener('input') onInput(){

    console.log("hasssssssss");
    const value = this.eI.nativeElement.value;
    if(value.length > this.maxChars){
      this.eI.nativeElement.value = value.substring(0,this.maxChars)
    }
  }
}

*/


