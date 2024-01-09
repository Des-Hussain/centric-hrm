// To parse this data:
//
//   import { Convert, EmployeePersonalDataModel } from "./file";
//
//   const employeePersonalDataModel = Convert.toEmployeePersonalDataModel(json);

export interface EmployeePersonalDataModel {
    fullName:         string;
    fatherName:       string;
    gender:           string;
    education:        string;
    martialStatus:    string;
    address:          string;
    contact:          string;
    emergencyContact: string;
    guid:             number;
    email:            string;
    jobTitle:         string;
    employmentType:   string;
    department:       string;
    appointmentDate:  string;
    reporting:        string;
    skills:           string;
    picturePath:      string;
    isActive:         boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toEmployeePersonalDataModel(json: string): EmployeePersonalDataModel {
        return JSON.parse(json);
    }

    public static employeePersonalDataModelToJson(value: EmployeePersonalDataModel): string {
        return JSON.stringify(value);
    }
}
