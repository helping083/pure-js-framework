export class Module {
  constructor(config) {
    this.components = config.components;
    this.modules = config.modules;
    this.bootstrap = config.bootstrap
  }

  start() {
    this.initComponents();
  }

  initComponents() {
    this.bootstrap.render()
    this.components.forEach(c => c.render());
  }
}