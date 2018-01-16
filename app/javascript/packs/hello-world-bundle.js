import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Buttons from '../bundles/Buttons/components/Buttons';
import Navigation from '../bundles/Homepage/components/Navigation';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Buttons,
  Navigation
});
