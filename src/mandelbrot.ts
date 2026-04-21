// Typescript Mandelbrot

const width = 80;
const height = 25;
const maxIter = 50;

// Characters from light to dense
const chars = " .:-=+*#%@";

for (let y = 0; y < height; y++) {
  let line = "";

  for (let x = 0; x < width; x++) {
    // Map pixel to complex plane
    const cx = (x / width) * 3.5 - 2.5;
    const cy = (y / height) * 2.0 - 1.0;

    let zx = 0;
    let zy = 0;
    let iter = 0;

    while (zx * zx + zy * zy <= 4 && iter < maxIter) {
      const xtemp = zx * zx - zy * zy + cx;
      zy = 2 * zx * zy + cy;
      zx = xtemp;
      iter++;
    }

    // Choose character based on iteration count
    const charIndex = Math.floor((iter / maxIter) * (chars.length - 1));
    line += chars[charIndex];
  }

  console.log(line);
}
