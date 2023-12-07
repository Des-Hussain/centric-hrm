import { Injectable } from '@angular/core';
import { ListSubServiceName, ServicesModel } from '../domain/interfaces/service_model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  addImageToColumn(columnData: string, src: string, type: string) {
    const imgTag = `<img class="${type}" src="${src}" />`;

    const updatedColumnData = imgTag+`<span>${columnData}</span>`;
    return updatedColumnData;
  }

  getAutomotiveServices(data:ServicesModel[]) {
    let automotiveServices:ServicesModel[] = [];
      if(data.length > 0){
        for (let entry of data) {
          if (entry.serviceTypeId == 1) {
            if(automotiveServices.length > 0 && automotiveServices.find(x => x.serviceId == entry.serviceId)){
              automotiveServices.find(x => x.serviceId == entry.serviceId)?.listSubServiceName.push({subServiceId: entry.listSubServiceName[0].subServiceId, subServiceName: entry.listSubServiceName[0].subServiceName, parentName: entry.serviceName, serviceParentId: entry.serviceId});
            }else{
              automotiveServices.push({serviceId: entry.serviceId, serviceTypeId: entry.serviceTypeId, serviceName: entry.serviceName, listSubServiceName: [{subServiceId: entry.listSubServiceName[0].subServiceId, subServiceName: entry.listSubServiceName[0].subServiceName, parentName: entry.serviceName, serviceParentId: entry.serviceId}]});
            }
        }
      }
    }
    return automotiveServices;
  }
  
  getHomeImprovementServices(data:ServicesModel[]) {
    let homeImprovementServices:ServicesModel[] = [];
      if(data.length > 0){
        for (let entry of data) {
          if (entry.serviceTypeId == 2) {
            if(homeImprovementServices.length > 0 && homeImprovementServices.find(x => x.serviceId == entry.serviceId)){
              homeImprovementServices.find(x => x.serviceId == entry.serviceId)?.listSubServiceName.push({subServiceId: entry.listSubServiceName[0].subServiceId, subServiceName: entry.listSubServiceName[0].subServiceName, parentName: entry.serviceName, serviceParentId: entry.serviceId});
            }else{
              console.log(entry.listSubServiceName);
              homeImprovementServices.push({
                serviceId: entry.serviceId,
                serviceTypeId: entry.serviceTypeId,
                serviceName: entry.serviceName,
                listSubServiceName: entry.listSubServiceName[0] != null ? [{subServiceId: entry.listSubServiceName[0].subServiceId, subServiceName: entry.listSubServiceName[0].subServiceName, parentName: entry.serviceName, serviceParentId: entry.serviceId}] : []
              });
            }
        }
      }
    }
    return homeImprovementServices;
  }
}
