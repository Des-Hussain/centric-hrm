import { AfterViewInit, Component } from '@angular/core';
import * as echarts from 'echarts';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
constructor () { }
 
  ngAfterViewInit() {
    const kpiCharts = echarts.init(document.getElementById('kpiCharts') as HTMLDivElement);
    // const circularCharts = echarts.init(document.getElementById('circular-charts') as HTMLDivElement);

   const option = {
      title: {
        text: 'Performance KPI',
        subtext: 'App Department'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Expense', 'Income']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Expense',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Income',
          type: 'bar',
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ],
          markPoint: {
            data: [
              { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
              { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
    };
    
    

    kpiCharts.setOption(option);
  }
attendanceContainer: AttendanceConModel[] = [
   {
    title: "Present",
    color: "#00D4E7",
    icon: "./../../../../assets/icons/present.svg",
    subTitle: "52",
    action: "none"
  },
  {
    title: "Absent",
    color: "#FF5C58",
    icon: "./../../../../assets/icons/absent.svg",
    subTitle: "12",
    action: "none"
  },
  {
    title: "Late",
    color: "#FFB800",
    icon: "./../../../../assets/icons/hourglass.svg",
    subTitle: "4",
    action: "none"
  },
  // {
  //   title: "On Leave",
  //   color: "#00D4E7",
  //   icon: "./../../../../assets/icons/total_employees.svg",
  //   subTitle: "2",
  //   action: "none"
  // },
 


];

}


