import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  template: `
    <div class="form-input-container">
      <label class="form-input-label" *ngIf="label">{{ label }}</label>
      <div class="form-input-icon-container" *ngIf="icon">
        <span class="form-input-icon">{{ icon }}</span>
      </div>
      <input
        type="{{ type }}"
        [placeholder]="placeholder"
        class="form-input"
        [ngClass]="{ 'error': error }"
        [(ngModel)]="value"
        [required]="required"
        [min]="min"
        [max]="max"
        [maxlength]="maxlength"
        [minlength]="minlength"
        [pattern]="pattern"
        (input)="onInput($event)"
      />
    </div>
  `,
  styles: [
    `
      @import 'styles';

      .form-input-container {
        @apply relative;
      }

      .form-input-label {
        @apply block mb-1 text-gray-700 font-bold text-sm;
      }

      .form-input {
        @apply
          block
          w-full
          rounded-md
          shadow-sm
          border-gray-300
          focus:border-indigo-500
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50;

        &::placeholder {
          @apply text-gray-400;
        }

        &:focus {
          @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
        }

        &.error {
          @apply
            border-red-500
            text-red-900
            placeholder-red-300
            focus:ring-red-500
            focus:border-red-500;
        }
      }

      .form-input-icon-container {
        @apply absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none;
      }

      .form-input-icon {
        @apply text-gray-400;
      }
    `,
  ],
})
export class FormInputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() icon: string;
  @Input() error = false;
  @Input() value: string;
  @Input() required = false;
  @Input() min: number;
  @Input() max: number;
  @Input() minlength: number;
  @Input() maxlength: number;
  @Input() pattern: string;

  onInput(value: any) {
    this.value = value;
  }
}