import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string): void {
    const timeString: String = new Date().toLocaleTimeString();
    console.log(`${message} (${timeString})`);
  }

  error(message: string): void {
    console.error(`ERROR: ${message}`);
  }
}