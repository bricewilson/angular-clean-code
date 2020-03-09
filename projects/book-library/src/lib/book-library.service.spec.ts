import { TestBed } from '@angular/core/testing';

import { BookLibraryService } from './book-library.service';

describe('BookLibraryService', () => {
  let service: BookLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
