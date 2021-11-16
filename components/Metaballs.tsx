import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React from "react";
import {
  areSame,
  createBalls,
  getMap,
  linearInterpolation,
  updateBalls,
} from "../helpers/metaballs";
import useWindowSize from "../helpers/useWindowSize";
import Ball from "../types/Ball";

type MetaballsProps = {};
export const Metaballs = ({}: MetaballsProps) => {
  const ref = React.useRef<HTMLCanvasElement>();
  const reset = React.useRef(true);
  const timeoutHandle = React.useRef<number>();

  const dims = useWindowSize();

  React.useEffect(() => {
    const canvas = ref.current;

    window.requestAnimationFrame(() => {
      draw(createBalls(12, canvas.width, canvas.height));
    });
  }, []);

  React.useEffect(() => {
    if (dims.width && dims.width < 800) {
      if (timeoutHandle.current) clearTimeout(timeoutHandle.current);

      timeoutHandle.current = setTimeout(() => {
        ref.current.width = dims.width;
        reset.current = true;
      }, 100) as any as number;
    }
  }, [dims.width]);

  const draw = (balls: Ball[]) => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    if (reset.current) {
      balls = createBalls(10, canvas.width, canvas.height);
      reset.current = false;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // gradient.addColorStop(0, "magenta");
    // gradient.addColorStop(0.5, "blue");
    // gradient.addColorStop(1.0, "red");

    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.5, "lightblue");
    gradient.addColorStop(1.0, "magenta");
    ctx.strokeStyle = gradient;

    ctx.beginPath();
    /*balls.forEach((ball) => {
      ctx.moveTo(ball.x + ball.r, ball.y);
      ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    });*/
    const scale = 0.1;
    const map = getMap(balls, canvas.width, canvas.height, scale);

    const threshold = 230;
    for (let x = 0; x < map.length - 1; x++) {
      for (let y = 0; y < Math.floor(canvas.height * scale) - 1; y++) {
        const tl = map[x][y];
        const tr = map[x + 1][y];
        const bl = map[x][y + 1];
        const br = map[x + 1][y + 1];
        if (
          !(
            Math.min(tl, tr, bl, br) > threshold ||
            Math.max(tl, tr, bl, br) < threshold
          )
        ) {
          const points = [];

          if (!areSame(tl, tr, threshold)) {
            points.push({
              x: linearInterpolation(x, x + 1, tl, tr, threshold),
              y: y,
            });
          }
          if (!areSame(tr, br, threshold)) {
            points.push({
              x: x + 1,
              y: linearInterpolation(y, y + 1, tr, br, threshold),
            });
          }
          if (!areSame(br, bl, threshold)) {
            points.push({
              x: linearInterpolation(x + 1, x, br, bl, threshold),
              y: y + 1,
            });
          }
          if (!areSame(bl, tl, threshold)) {
            points.push({
              x: x,
              y: linearInterpolation(y + 1, y, bl, tl, threshold),
            });
          }
          // if (points.length % 2 === 1) console.log(points);
          const [p1, p2] = points;
          if (points.length >= 2) {
            ctx.moveTo(Math.round(p1.x / scale), Math.round(p1.y / scale));
            ctx.lineTo(Math.round(p2.x / scale), Math.round(p2.y / scale));
          }
        }
      }
    }

    ctx.closePath();
    ctx.stroke();
    const newBalls = updateBalls(balls, canvas.width, canvas.height);

    window.requestAnimationFrame(() => draw(newBalls));
  };

  return (
    <Box w="full" d="flex" justifyContent="center">
      <Box pos="absolute" top={0} zIndex="0">
        <canvas ref={ref} width={800} height={500}></canvas>
      </Box>
    </Box>
  );
};
