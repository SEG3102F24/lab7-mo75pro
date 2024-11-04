import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authorForm: FormGroup;
  authorDetails: any = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService
  ) {
    this.authorForm = this.fb.group({
      authorId: ['']
    });
  }

  onSubmit(): void {
    const authorId = this.authorForm.get('authorId')?.value;
    if (authorId) {
      this.authorService.getAuthorById(authorId).subscribe(
        (data) => {
          this.authorDetails = data;
          this.errorMessage = null;
        },
        (error) => {
          this.authorDetails = null;
          this.errorMessage = `Author with ID ${authorId} not found.`;
        }
      );
    }
  }
}

