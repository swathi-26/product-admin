import { Component, OnInit, ViewChild } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  itemsList: Array<any>;
  deletedItemDetails;
  isEditClicked: Boolean = false;
  @ViewChild(AddItemComponent) editItemTemplate: AddItemComponent;

  constructor() { }

  deleteItem(index){
    this.itemsList.splice(index, 1);
  }

  editItem(index){
    this.editItemTemplate.product = this.itemsList[index];
    this.isEditClicked = true;
  }

  disableEdit(e){
    this.isEditClicked = false
  }

  ngOnInit(): void {

    this.itemsList = [{
      "name": "BoAt Bassheads 152",
      "category": "Earphones and Earbuds",
      "price": "2000",
      "description": "Made in India in Ear Wired Earphones with Mic(Vibrant Green)"
    }, {
      "name": "JBL Wireless Earbuds",
      "category": "Earphones and Earbuds",
      "price": "4499",
      "description": "Truly Wireless Earbuds with Built-in Mic, 21 Hours Combined Playtime, Voice Assistance Integration (Black)"
    }, {
      "name": "SanDisk 32GB USB Drive",
      "category": "Computer accessories",
      "price": "599",
      "description": "Ultra-compact and portable USB flash drive"
    }, {
      "name": "OnePlus Nord 5G",
      "category": "Mobile phones",
      "price": "32999",
      "description": "Blue Marble, 12GB RAM, 256GB Storage"
    }, {
      "name": "Samsung Galaxy M12",
      "category": "Mobile phones",
      "price": "12499",
      "description": "Blue,4GB RAM, 64GB Storage 6000 mAh with 8nm Processor"
    }, {
      "name": "Logitech B170 Mouse",
      "category": "Computer accessories",
      "price": "699",
      "description": "Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, 12-Months Battery Life, Black"
    }]
  }

}
