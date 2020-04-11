import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';

interface Props {
  height: number;
  width: number;
  url: string;
  fillMode: enum;
}

export class RemoteImage extends React.Component<Props> {
  static defaultProps = {
    height: 300,
    width: 300,
    url: 'https://placehold.it/300x300',
    fillMode: 'fill',
  }

  static propertyControls: PropertyControls = {
    url: { type: ControlType.String, title: 'URL' },
    fillMode: {
      type: ControlType.Enum,
      title: 'Fill Mode',
      options: [
        'fill',
        'contain',
        'cover',
        'none',
        'scale-down',
      ],
      optionTitles: [
        'Fill',
        'Contain',
        'Cover',
        'None',
        'Scale Down',
      ],
    },
  }

  render() {
    return (
      <img
        width={this.props.width}
        height={this.props.height}
        src={this.props.url}
        style={{
          objectFit: this.props.fillMode,
        }}
      />
    );
  }
}
