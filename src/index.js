import { appModule } from './app/app.module';
import {bootstrap} from './framework';
import {appModules} from './app/app.module';
import {wfm} from './framework/';

wfm.delay(3000).then(() => {
  bootstrap(appModules)
});
