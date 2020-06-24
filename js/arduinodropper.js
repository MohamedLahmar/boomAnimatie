
Drop.prototype.fall = function(delta, forest) {
    if (this.exploded) {
      this.size += delta * 80;
      if (this.size > this.maxSize)
        return true;
      return false;
    }

    var tree = forest.getHitTree(this.x, this.y);

    if (tree || this.y > this.maxHeight)
      this.exploded = true;

    if (tree)
      tree.trigger('hit', {speed: this.dy});

    this.dy = Math.min(10, this.dy + delta);
    this.y += this.dy * delta * this.maxSize;

    this.x += this.dx * delta;
    return false;
  };


let count = 0;
let margin = 0;

setTimeout(function() {
    setInterval(function(){ 
        var val = document.getElementById("value").innerHTML;
        //document.getElementById("val").innerHTML = margin;
        //document.getElementById("count").innerHTML = count;
        
        //Triggered state (When something gets thrown in the bin)
        if (val < 15) { //Distance that triggers the code (in cm)
            document.getElementById("ruler").style.bottom = "-"+margin+2+"px";
            document.getElementById("grass").style.bottom = "-"+margin+2+"px";
            document.getElementById("audio").play();
            margin ++;
        }
         //Idle state
        else {
        }
    }, 10); //Check sensor every 10ms
}, 15000);



