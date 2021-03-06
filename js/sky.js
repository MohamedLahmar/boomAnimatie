(function() {
  function Sky(canvas, dropper) {
    this.canvas = canvas;
    this.dropper = dropper;
    this.clouds = [];
    this.addCloud('Zorg\nvoor de\nbomen\ngooi uw afval in de\n' +
        'afvalbak om de bomen.\n\nwater te geven');
  }

  Sky.prototype.render = function(ctx) {
    for (var i = 0; i < this.clouds.length; ++i)
      this.clouds[i].render(ctx);
  };

  Sky.prototype.update = function(delta) {
    var toDelete = [];
    for (var i = 0; i < this.clouds.length; ++i) {
      if (this.clouds[i].update(delta))
        toDelete.push(this.clouds[i]);
    }

    this.clouds = _.difference(this.clouds, toDelete);

    if (Math.random() < 1)
      this.addCloud();
  };

  Sky.prototype.addCloud = function(text) {
    this.clouds.push(new Cloud(this.canvas, this.dropper, text));
  };

  window.Sky = Sky;
})();
