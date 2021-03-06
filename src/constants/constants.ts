const SCHEMES = {
  schemePistol: "84% 0%, 75% 8%, 77% 13%, 42% 13%, 40% 18%, 29% 19%, 29% 34%, 32% 38%, 10% 37%, 15% 20%, 14% 16%, 9% 16%, 6% 18%, 8% 14%, 13% 12%, 13% 8%, 9% 5%, 5% 5%, 2% 4%, 5% 2%, 10% 2%, 15% 1%, 20% 4%, 23% 2%, 28% 1%, 28% 0%",
  schemePistol2: "86% 0%, 89% 8%, 85% 15%, 32% 13%, 30% 17%, 23% 17%, 22% 31%, 25% 35%, 9% 33%, 11% 31%, 14% 20%, 14% 15%, 10% 15%, 6% 17%, 8% 12%, 11% 8%, 7% 6%, 3% 3%, 9% 0%, 20% 0%",
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
