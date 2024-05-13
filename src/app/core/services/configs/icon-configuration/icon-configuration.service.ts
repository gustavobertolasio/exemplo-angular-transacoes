import { Injectable } from '@angular/core';
import { IconConfig } from '../../../models/icon-config';

@Injectable({
  providedIn: 'root',
})
export class IconConfigurationService {
  get icons(): IconConfig {
    return {
      money: {
        alt: 'A money icon',
        src: '../../../assets/money.svg',
      },
    };
  }
}
