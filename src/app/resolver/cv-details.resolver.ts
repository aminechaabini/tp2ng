import { ResolveFn } from '@angular/router';
import { Cv } from '../models/cv';
import {inject} from "@angular/core";
import { CvServiceService } from '../services/cv-service.service';

export const cvDetailResolver: ResolveFn<Cv | null> =
  (route, state) => {
    return inject(CvServiceService).getCvById(+route.paramMap.get('id')!)??null;
}