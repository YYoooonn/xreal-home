type Position = [number, number, number];

export function computeDelay(position: Position, ratio: number) {
  // 좌표 비율에 맞는 delay 생성
  return (Math.abs(position[0]) + Math.abs(position[2])) * ratio + 10;
}

export function computeRotation(angleDiff: number) {
  //난수 생성, 임의의 방향으로 rotation 하도록
  return Math.random() > 0.5 ? -angleDiff : angleDiff;
}

export function isWhite(position: Position) {
  const { x, y } = { x: position[0], y: position[2] };
  return (
    (x == -1 && (y == 0 || y == 1)) ||
    (x == 0 && y == 0) ||
    (x == 1 && (y == 0 || y == -1))
  );
}

export function isEdgeOrCenter(x: number, y: number) {
  return !(((x == -2 || x == 2) && (y == 2 || y == -2)) || (x == 0 && y == 0));
}
