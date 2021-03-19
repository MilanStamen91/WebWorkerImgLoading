/* myWorklet.js */

registerPaint('myGradient', class {
    paint(ctx, size, properties) {
      var gradient = ctx.createLinearGradient(0, 0, 0, size.height / 3);
  
      gradient.addColorStop(0, "black");
      gradient.addColorStop(0.7, "rgb(210, 210, 210)");
      gradient.addColorStop(0.8, "rgb(230, 230, 230)");
      gradient.addColorStop(1, "white");
  
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size.width, size.height / 3);
    }
});

/* registerPaint('circle', class {
    static get inputProperties() { return ['--circle-color']; }
    paint(ctx, geom, properties) {
      // Change the fill color.
      const color = properties.get('--circle-color');
      ctx.fillStyle = color.cssText;
  
      // Determine the center point and radius.
      const x = geom.width / 2;
      const y = geom.height / 2;
      const radius = Math.min(x, y);
  
      // Draw the circle \o/
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
}); */