const fs = require('fs');
const input = fs.readFileSync('./d01.txt', {
  encoding: 'utf-8',
});

const result = input.split(', ').reduce((state, [dir, ...steps]) => {
  const next = (4 + state.dir + (dir == 'R' ? 1 : -1)) % 4;
  return {
    dir: next,
    x: state.x + (next % 2 == 1 ? parseInt(steps.join(''), 10) * (2 - next) : 0),
    y: state.y + (next % 2 == 0 ? parseInt(steps.join(''), 10) * (1 - next) : 0),
  };
}, { dir: 0, x: 0, y: 0 });

console.log(Math.abs(result.x) + Math.abs(result.y));
