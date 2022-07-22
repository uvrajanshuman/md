import { TestBed } from '@angular/core/testing';

import { SectionMarkdownService } from './section-markdown.service';

describe('SectionMarkdownService', () => {
  let service: SectionMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
