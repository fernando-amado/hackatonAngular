import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { MatRatingComponent } from 'src/theme/components/mat-rating/mat-rating.component';
import { MatAvatarComponent } from 'src/theme/components/mat-avatar/mat-avatar.component';
import { DirectivasModule } from 'src/theme/directivas/directivas.module';
import { AutocompletarService } from '@sinco/angular/lib/components/autocompletar/autocompletar.service';
import { MatAutocomplete } from '@angular/material/autocomplete';

@NgModule({
declarations: [AppComponent, MatRatingComponent, MatAvatarComponent, ],
  imports: [
    MaterialModule,
    DirectivasModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
