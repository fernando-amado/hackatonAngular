import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { MatButtonModule          } from '@angular/material/button';
import { MatProgressBarModule     } from '@angular/material/progress-bar';
import { MatChipsModule           } from '@angular/material/chips';
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule          } from '@angular/material/slider';
import { MatBadgeModule           } from '@angular/material/badge';
import { MatSlideToggleModule     } from '@angular/material/slide-toggle';
import { MatStepperModule         } from '@angular/material/stepper';
import { MatInputModule           } from '@angular/material/input';
import { MatSnackBarModule        } from '@angular/material/snack-bar';
import { MatIconModule            } from '@angular/material/icon';
import { MatTabsModule            } from '@angular/material/tabs';
import { MatCheckboxModule        } from '@angular/material/checkbox';
import { MatRadioModule           } from '@angular/material/radio';
import { MatDividerModule         } from '@angular/material/divider';
import { MatFormFieldModule       } from '@angular/material/form-field';
import { MatSelectModule          } from '@angular/material/select';
import { MatDatepickerModule      } from '@angular/material/datepicker';
import { MatCardModule            } from '@angular/material/card';
import {MatAutocompleteModule     } from '@angular/material/autocomplete';
import {MatListModule             } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
const components = [
  CommonModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatBadgeModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRippleModule,
  MatCardModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatListModule,
];
@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule {}