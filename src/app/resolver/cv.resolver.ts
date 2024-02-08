import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import { CvServiceService } from '../services/cv-service.service';

export const cvResolver: ResolveFn<any> =
  (route, state) => {
    return inject(CvServiceService).getCvs();
  }