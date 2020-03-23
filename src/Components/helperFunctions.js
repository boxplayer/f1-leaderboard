export function compare(a, b) {
  if (a.time > b.time) return 1;
  if (b.time > a.time) return -1;
  return 0;
}

export function createRow(name, car, time) {
  return { name, car, time };
}

