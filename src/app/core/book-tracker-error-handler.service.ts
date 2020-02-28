import { Injectable, ErrorHandler } from '@angular/core';
import { BookTrackerError } from 'src/app/models/bookTrackerError';

@Injectable({
  providedIn: 'root'
})
export class BookTrackerErrorHandlerService implements ErrorHandler {

  handleError(error: any): void {
    let customError: BookTrackerError = new BookTrackerError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = 'An error occurred. Please try again.';

    console.log(customError);
  }

  constructor() { }

}
