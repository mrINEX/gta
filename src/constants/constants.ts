const SCHEMES = {
  schemeePistol: "78% 21%, 78% 27%, 75% 34%, 31% 32%, 30% 36%, 26% 36%, 23% 47%, 24% 52%, 12% 51%, 15% 46%, 18% 32%, 15% 30%, 11% 28%, 8% 29%, 15% 22%, 15% 19%, 13% 16%, 18% 18%, 20% 20%, 22% 19%, 22% 21%",
  drawPistol: (ctx: { save: () => void; beginPath: () => void; strokeStyle: string; lineTo: (arg0: any, arg1: any) => void; closePath: () => void; lineWidth: number; stroke: () => void; fillStyle: string; fill: () => void; restore: () => void; }, path: any[]) => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    path.forEach((el: string, i: number) => {
      if (i % 2) {
        console.log(path[i - 1], el.replace(',', ''));
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
  removePistol: (ctx: { save: () => void; beginPath: () => void; strokeStyle: string; lineTo: (arg0: any, arg1: any) => void; closePath: () => void; lineWidth: number; stroke: () => void; fillStyle: string; fill: () => void; restore: () => void; }, path: any[]) => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    path.forEach((el, i) => {
      if (i % 2) {
        ctx.lineTo(path[i - 1], el.replace(',', ''));
      }
    });
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }
};

export default SCHEMES;
