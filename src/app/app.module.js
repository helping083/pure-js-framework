import {WFMModule} from '../framework/';
import {appComponent} from './app.component';
class AppModule extends WFMModule{
  constructor(config) {
    super(config);
  }
}

export const appModules = new AppModule({
  components: [appComponent]
});
