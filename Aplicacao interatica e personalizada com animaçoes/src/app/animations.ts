import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);
export const checkStateTrigger = trigger('checkState', [
  transition('* => true', [
    style({
      transform: 'scale(0.5)',
      opacity: 0.5,
    }),
    animate(
      '400ms cubic-bezier(0.36, 0, 0.66, -0.56)',
      style({
        transform: 'scale(1.2)',
        opacity: 1,
      })
    ),
    animate(
      '100ms ease-out',
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
]);
