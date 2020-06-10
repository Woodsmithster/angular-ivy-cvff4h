import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  visitSuccess: string = "Visit Unsuccessful";
  isSuccessful: boolean;

  techCallForm = this.fb.group({
    orderID: ["", Validators.required],
    serviceID: ["", Validators.required],
    isRepeatVisit: false,
    reasonForRepeatVisit: "",
    techName: ["", Validators.required],
    visitDate: ["", Validators.required],
    startTime: ["", Validators.required],
    finishTime: ["", Validators.required],
    provisionersNotes: ["", Validators.required],
    isSuccessful: false,
    reasonFoeUnsuccessfulVisit: [""],
    isTechDidNotHaveNecessaryTools: false,
    isTechDidNotHaveAllTheHardware: false,
    isTechInstalledFaultyCabling: false,
    isDeliveredIncorrectly: false,
    isServiceNotDelivered: false,
    isWrongPairDetails: false,
    isServiceNotTagged: false,
    isRequestMissingRequipment: false,
    isFailedToAdviseOfInduction: false,
    isComplexCablingReqauirements: false,
    isContactNotAvailable: false,
    isSiteInaccessable: false,
    isSiteUnabletoLocateMDF: false,
    closureLevel1: ["", Validators.required],
    closureLevel2: ["", Validators.required],
    feeForServiceOwner: ["", Validators.required],
    techNPS: ["", Validators.required]
  });

  onSubmit(formData) {
      console.warn(formData);
      this.techCallForm.reset();
  }

  visitSuccessful() {
    if (this.isSuccessful) {
      this.isSuccessful = false;
      this.visitSuccess = "Visit Unsuccessful";
    } else {
      this.isSuccessful = true;
      this.visitSuccess = "Visit Successful";
    }
  }

  constructor(private fb: FormBuilder) {}

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  setTime() {
    let date = new Date();
    let hour = date.getHours();

    console.log(
      "Hours = " + date.getHours() + ":" + this.addZero(date.getMinutes())
    );
  }
}
