import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const SlideInOut = trigger('SlideInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate(
      '0.3s ease-in',
      style({ opacity: '1', transform: 'translateY(0%)' })
    ),
  ]),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0%)',
    })
  ),
  state(
    'hidden',
    style({
      opacity: '0',
      transform: 'translateY(-100%)',
    })
  ),
  transition('visible => hidden', [animate('0.3s ease-out')]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0%)' }),
    animate(
      '0.3s ease-out',
      style({ opacity: '0', transform: 'translateY(-100%)' })
    ),
  ]),
]);
