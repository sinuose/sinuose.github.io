
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class twoDimParticle 
{
    constructor(x, y, h, ) 
    {
    this.x = x;         // x pos
    this.y = y;         // y pos
    this.h = h; // step-size
  }
  
  // Class method (no 'function' keyword needed)
  move(dt) 
  {
    const angle = Math.random() * (2 * Math.PI); 
    // move    
    this.x += Math.cos(angle) * this.h * dt;
    this.y += Math.sin(angle) * this.h * dt;
}

  describe() {
    return `Position: (${this.x}, ${this.y})`;
  }

  getX()
  {
    return this.x;
  }

  getY()
  {
    return this.y;
  }
}

export async function runSim(ctx, canvas, twoDimParticle)
{
    
    for(let i = 0; i < 100; i++)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        twoDimParticle.move(1);
        
        // switch(twoDimParticle.getX())
        // {
        //     case(twoDimParticle.getX() <= 0):
        //     {
                
        //     }
        //     case(0 < twoDimParticle.getX() <= canvas.width):
        //     {
        //         twoDimParticle.
        //     }
        // }
        console.log(twoDimParticle.getX(), twoDimParticle.getY())
        ctx.beginPath();
        ctx.arc(twoDimParticle.getX(), twoDimParticle.getY(), 10, 0, 2 * Math.PI);
        // Draw all
        ctx.stroke();
        await sleep(100)
    }
}