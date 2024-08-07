import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../Component/header/header.component";
import { SectionComponent } from "../../Component/section/section.component";
import { LabelInputComponent } from "../../Component/label-input/label-input.component";

@Component({
  selector: 'app-form-group',
  standalone: true,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, SectionComponent, LabelInputComponent] // 直接在這裡導入 ReactiveFormsModule，FormGroup 要用
 // 直接在這裡導入 ReactiveFormsModule，FormGroup 要用
})
export class FormGroupComponent {
  headerTitle = 'FormGroup';
  section1Title = 'FormGroup 簡單範例 (在 constructor() 裡初始化)';
  section2Title = 'FormGroup 簡單範例 (用 非空斷言操作符(!) 在 ngOnInit() 裡初始化)';

  name1 = 'Name:';
  nameInputType1 = 'text';
  nameControlName1 = 'name';
  email1 = 'Email:';
  emailInputType1 = 'text';
  emailControlName1 = 'email';
  name2 = 'Name:';
  nameInputType2 = 'text';
  nameControlName2 = 'name';
  email2 = 'Email:';
  emailInputType2 = 'text';
  emailControlName2 = 'email';

  myForm1: FormGroup;
  myForm2!: FormGroup;
  formData1: any; // 用來保存表單數據
  formData2: any; // 用來保存表單數據

  constructor() {
    this.myForm1 = new FormGroup({
      name: new FormControl('Charmy1'), // 預設 name 的 input value 是 Charmy1
      email: new FormControl('')
    });
    
  }

  ngOnInit() {
    this.myForm2 = new FormGroup({
      name: new FormControl('Charmy2'), // 預設 name 的 input value 是 Charmy2
      email: new FormControl('')
    });
  }


  onSubmit1() {
    console.log(this.myForm1.value);
    this.formData1 = this.myForm1.value; // 保存表單數據到 formData
  }

  onSubmit2() {
    console.log(this.myForm2.value);
    this.formData2 = this.myForm2.value; // 保存表單數據到 formData
  }
}
