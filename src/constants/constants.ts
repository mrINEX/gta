const SCHEMES = {
  schemePistol: "78% 21%, 78% 27%, 75% 34%, 31% 32%, 30% 36%, 26% 36%, 23% 47%, 24% 52%, 12% 51%, 15% 46%, 18% 32%, 15% 30%, 11% 28%, 8% 29%, 15% 22%, 15% 19%, 13% 16%, 18% 18%, 20% 20%, 22% 19%, 22% 21%",
  schemePistol2: "2% 0%, 6% 3%, 53% 3%, 53% 2%, 54% 8%, 53% 12%, 28% 11%, 27% 15%, 22% 15%, 19% 22%, 20% 24%, 9% 25%, 10% 13%, 7% 11%, 0% 13%, 2% 7%",
  schemePistol3: "85% 0%, 85% 7%, 83% 11%, 35% 11%, 35% 17%, 27% 17%, 22% 32%, 24% 37%, 22% 38%, 7% 37%, 7% 35%, 9% 34%, 13% 17%, 10% 14%, 6% 14%, 0% 15%, 7% 7%, 5% 4%, 0% 1%, 10% 0%",
  drawPistol: function (x: any, y: any, ctx: { save: () => void; beginPath: () => void; translate: (arg0: any, arg1: any) => void; rotate: (arg0: any) => void; scale: (arg0: number, arg1: number) => void; strokeStyle: string; lineTo: (arg0: string, arg1: string) => void; closePath: () => void; lineWidth: number; stroke: () => void; fillStyle: string; fill: () => void; restore: () => void; }, angel: any) {
    const path = this.schemePistol2.replace(/%/g, '').split(' ');
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.scale(-1, 1);
    ctx.rotate(angel); // (Math.PI / 180) * 
    ctx.strokeStyle = 'black';
    path.forEach((el: string, i: number) => {
      if (i % 2) {
        ctx.lineTo(path[i - 1], el.replace(',', ''));
      }
    });
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#607d8b';
    ctx.fill();
    ctx.restore();
  },
  colorsHero: ['blue', 'black', '#ff5722'],
};

export default SCHEMES;
