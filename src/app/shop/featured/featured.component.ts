import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayStyle } from '../../shared/settings/display-style.enum';

@Component({
  selector: 'my-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedComponent {
  DisplayStyle = DisplayStyle;

  constructor() { }
}
