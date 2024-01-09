import { Component } from '@angular/core';
import { PayrollModel } from 'src/app/domain/interfaces/payroll_model';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent {

  columns: string[] = [
    'employeeId',
    'employeeName',
    'date',
    'accountNo',
    'bankName',
    'paymentMethod',
    'wDays',
    'wHours',
    'deduction',
    'status',
  ];

  data: PayrollModel[] = [{
    employeeId: 'EMP001',
    employeeName: 'John Doe',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Jane Doe',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  },
  {
    employeeId: 'EMP003',
      employeeName: 'John Smith',
      date: '01/01/2021',
      accountNo: '123456789',
      bankName :'Bank of America',
      paymentMethod: 'Check',
      wDays: 20,
      wHours: 160,
      deduction: 100,
      status: 'Paid'
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Jane Smith',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  },
  {
    employeeId: 'EMP005',
    employeeName: 'John Doe',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  },
  {
    employeeId: 'EMP006',
    employeeName: 'Jane Doe',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  },
  {
    employeeId: 'EMP007',
    employeeName: 'John Smith',
    date: '01/01/2021',
    accountNo: '123456789',
    bankName :'Bank of America',
    paymentMethod: 'Check',
    wDays: 20,
    wHours: 160,
    deduction: 100,
    status: 'Paid'
  }
  ];
  
  constructor() { }
}
