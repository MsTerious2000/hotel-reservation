import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from 'src/app/services/guest.service';
import { Guest } from 'src/app/models/guest.model';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.css']
})
export class GuestEditComponent implements OnInit {
  guest = new Guest();
  editForm!: FormGroup;
  submitted = false;
  data: any;
  id: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private guestService: GuestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.guestService.getGuestById(this.id).subscribe(res => {
      this.data = res;
      this.guest = this.data;
      this.getData();
    })
  }

  get f() {
    return this.editForm.controls;
  }

  getData() {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.guest.firstName, Validators.required),
      middleName: new FormControl(this.guest.middleName, Validators.required),
      lastName: new FormControl(this.guest.lastName, Validators.required),
      address: new FormControl(this.guest.address, Validators.required),
      contactNumber: new FormControl(this.guest.contactNumber, Validators.required),
      gender: new FormControl(this.guest.gender, Validators.required),
      email: new FormControl(this.guest.email, [Validators.required, Validators.email]),
      password: new FormControl(this.guest.password, Validators.required),
    });
  }

  update() {
    this.submitted = true;

    if (this.editForm.invalid) {
      alert('UPDATE FAILED! CHECK YOUR ENTERED DATA!');
      return;
    } else if (confirm('SAVE CHANGES?')) {
      this.guestService.updateData(this.id, this.editForm.value).subscribe(res => {
        this.data = res;
        alert('CHANGES SAVED SUCCESSFULLY!')
        this.router.navigateByUrl('/admin');
      });
    } else {
      return;
    }
  }

  cancel() {
    if (confirm('DISCARD CHANGES?')) {
      this.router.navigateByUrl('admin');
    } else {
      return;
    }
  }

}
