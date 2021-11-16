import Ball from "../types/Ball";

export const areSame = (v1: number, v2: number, threshold: number) => {
  if (Math.min(v1, v2) > threshold || Math.max(v1, v2) < threshold) {
    return true;
  }
  return false;
};

export const linearInterpolation = (
  v1: number,
  v2: number,
  f1: number,
  f2: number,
  threshold: number
) => {
  return v1 + (v2 - v1) * ((threshold - f1) / (f2 - f1));
};

const randomRange = (from: number, to: number) => {
  return Math.random() * (to - from) + from;
};

const updateVelocity = (value: number, radius: number, max: number) => {
  return value - radius < 20 || value + radius > max - 20 ? -1 : 1;
};

export const getMap = (
  balls: Ball[],
  width: number,
  height: number,
  scale: number
) => {
  const mapWidth = width * scale;
  const mapHeight = height * scale;
  const map: number[][] = [];
  // init map with 0s
  for (let x = 0; x < mapWidth; x++) {
    map[x] = [];
    for (let y = 0; y < mapHeight; y++) {
      map[x][y] = 0;
    }
  }

  for (let x = 0; x < mapWidth; x++) {
    for (let y = 0; y < mapWidth; y++) {
      balls.forEach((ball) => {
        map[x][y] +=
          (ball.r * ball.r) /
          ((x - ball.x * scale) * (x - ball.x * scale) +
            (y - ball.y * scale) * (y - ball.y * scale));
      });
    }
  }
  return map;
};

export const createBalls = (
  amount: number,
  maxWidth: number,
  maxHeight: number
) => {
  const circles: Ball[] = [];
  const r = maxWidth / 10;
  const minRadius = maxWidth / 15;

  for (let i = 0; i < amount; i++) {
    circles.push({
      x: randomRange(r, maxWidth - r),
      y: randomRange(r, maxHeight - r),
      r: randomRange(minRadius, r),
      vx: randomRange(-1, 1),
      vy: randomRange(-1, 1),
    });
  }
  return circles;
};

export const updateBalls = (
  balls: Ball[],
  maxWidth: number,
  maxHeight: number
): Ball[] => {
  return balls.map((ball) => {
    const vx = ball.vx * updateVelocity(ball.x, ball.r, maxWidth);
    const vy = ball.vy * updateVelocity(ball.y, ball.r, maxHeight);

    return {
      ...ball,
      x: ball.x + vx,
      y: ball.y + vy,
      vx: vx,
      vy: vy,
    };
  });
};
