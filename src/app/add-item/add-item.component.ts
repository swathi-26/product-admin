import { Component, Input, Output, OnInit, EventEmitter, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() showContent: Boolean;
  @Input() parent;
  @Output() public viewInventory = new EventEmitter<String>();
  productForm: FormGroup;
  product = {
    "name": "",
    "category": "",
    "price": "",
    "description": ""
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      category: new FormControl(this.product.category, Validators.required),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  submit(form: FormGroup){
    console.log(form.value)
  }

}
