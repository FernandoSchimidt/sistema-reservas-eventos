import { Component } from '@angular/core';
import { Event } from '../../../models/event.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../../../services/event.service';
import { Router, RouterLink } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
})
export class EventFormComponent {
  eventForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.eventForm = fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: [null, [Validators.required]],
      capacity: [null, [Validators.required]],
      reservedSeats: [0, [Validators.required]],
    });
  }
  createEvent() {
    if (this.eventForm.valid) {
      const formValue = this.eventForm.value;
      // Formatar a data no formato esperado pelo backend
      formValue.date = formatDate(formValue.date, "yyyy-MM-dd'T'HH:mm:ss", 'en-US');

      this.eventService.createEvent(formValue).subscribe({
        next: () => {
          this.router.navigate(['events']);
        },
        error: (err) => {
          console.error('Erro ao criar evento:', err);
          // Adicione um feedback visual para o usuário aqui
        }
      });
    } else {
      console.warn('Formulário inválido');
      // Adicione um feedback visual para o usuário aqui
    }
  }
}
