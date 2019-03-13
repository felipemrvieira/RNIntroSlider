/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Intro from './Intro';
import Termo from './Termo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Termo);
