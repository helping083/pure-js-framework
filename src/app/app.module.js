import {WFMModule} from '../framework/';
import {appComponent} from './app.component';
import {appHeader} from './common/Header';
class AppModule extends WFMModule{
  constructor(config) {
    super(config);
  }
}

export const appModules = new AppModule({
  components: [appHeader],
  bootstrap: appComponent,
});
