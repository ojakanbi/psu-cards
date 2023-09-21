import { html } from 'lit';
import '../src/psu-card.js';

export default {
  title: 'PsuCard',
  component: 'psu-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <psu-card
      style="--psu-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </psu-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
