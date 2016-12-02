const fs = require('fs');
const input = fs.readFileSync('./d01.txt', {
  encoding: 'utf-8',
});
const visits = {};
const visit = (x, y) => visits[`${x}-${y}`] = 1;
const visited = (x, y) => visits[`${x}-${y}`];

const result = input.split(', ').reduce((state, [dir, ...steps]) => {
  const {x, y} = state;
  const next = (4 + state.dir + (dir == 'R' ? 1 : -1)) % 4;
  steps = parseInt(steps.join(''));
  for (let i = 0; i < steps; i++) {
    if (visited(state.x, state.y)) console.log(Math.abs(state.x) + Math.abs(state.y));
    visit(state.x, state.y);
    state = {
      dir: next,
      x: state.x + (next % 2 == 1 && 1 * (2 - next)),
      y: state.y + (next % 2 == 0 && 1 * (1 - next)),
    };
  }
  return state;
}, { dir: 0, x: 0, y: 0 });

console.log(Math.abs(result.x) + Math.abs(result.y));
