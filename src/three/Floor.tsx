import { Globals } from "@react-spring/three";
import { BlackTile, WhiteTile, IconTile, IconTileWrapper } from "./Tile";
import { CAT } from "@/constants/category";

import CatIcon from "./CatIcon";
import Button from "./Button";
import ProIcons from "./ProIcon";

Globals.assign({ frameLoop: "always" });
/* TODO
Cannot call the manual advancement of rafz whilst frameLoop is not set as demand 
위 에러 메세지 해결 필요 */

const MIN_COLUMN = 2;
const MIN_ROW = 2;
const MAX_COLUMN = 15;
const MAX_ROW = 15;

function BlackTiles() {
  return (
    <group position={[0, 0, 0]}>
      {/* 단순 반복의 검정 타일들 */}
      {Array.from({ length: MAX_COLUMN }).map((_, i) =>
        Array.from({ length: MAX_ROW }).map((_, j) => {
          if (i > MIN_COLUMN || j > MIN_ROW) {
            const k = (i + 1) * j;
            if (i == 0) {
              return (
                <group key={k}>
                  <BlackTile position={[0, 0, j]} />
                  <BlackTile position={[0, 0, -j]} />
                </group>
              );
            } else if (j == 0) {
              return (
                <group key={k}>
                  <BlackTile position={[i, 0, 0]} />
                  <BlackTile position={[-i, 0, 0]} />
                </group>
              );
            } else {
              return (
                <group key={k}>
                  <BlackTile position={[i, 0, j]} />
                  <BlackTile position={[-i, 0, j]} />
                  <BlackTile position={[-i, 0, -j]} />
                  <BlackTile position={[i, 0, -j]} />
                </group>
              );
            }
          }
        })
      )}
      {/* -2 ~ 2 까지는 임의로 설정 */}
      <BlackTile position={[-2, 0, 1]} />
      <BlackTile position={[-2, 0, 0]} />
      <BlackTile position={[-2, 0, -1]} />
      <BlackTile position={[-1, 0, 2]} />
      <BlackTile position={[-1, 0, -1]} />
      <BlackTile position={[-1, 0, -2]} />
      <BlackTile position={[0, 0, 2]} />
      <BlackTile position={[0, 0, 1]} />
      <BlackTile position={[0, 0, -1]} />
      <BlackTile position={[0, 0, -2]} />
      <BlackTile position={[1, 0, 2]} />
      <BlackTile position={[1, 0, 1]} />
      <BlackTile position={[1, 0, -2]} />
      <BlackTile position={[2, 0, 1]} />
      <BlackTile position={[2, 0, 0]} />
      <BlackTile position={[2, 0, -1]} />
    </group>
  );
}

function WhiteTiles() {
  // -2 ~ 2 까지는 임의로 설정
  return (
    <group>
      <WhiteTile position={[-1, 0, 1]} />
      <WhiteTile position={[-1, 0, 0]} />
      <WhiteTile position={[1, 0, -1]} />
      <WhiteTile position={[1, 0, 0]} />
    </group>
  );
}

function ButtonTile() {
  return (
    <IconTileWrapper position={[0, 0, 0]} isWhite={true}>
      <CatIcon type={CAT.Xreal} position={[0, 0.1, 0]} />
      <Button position={[0, 0, 0]} />
    </IconTileWrapper>
  );
}

function IconTiles(props: { cat?: boolean }) {
  const Center = props.cat ? (
    <IconTile position={[0, 0, 0]} type={CAT.Xreal} />
  ) : (
    <ButtonTile />
  );
  return (
    <group>
      <IconTile position={[-2, 0, 2]} type={CAT.Project} />
      <IconTile position={[2, 0, 2]} type={CAT.Events} />
      <IconTile position={[2, 0, -2]} type={CAT.JoinUs} />
      <IconTile position={[-2, 0, -2]} type={CAT.MAGAZINE} />
      {Center}
    </group>
  );
}

function Floor(props: { cat?: boolean }) {
  return (
    <>
      <BlackTiles />
      <IconTiles {...props} />
      <ProIcons />
      <WhiteTiles />
    </>
  );
}

export default Floor;
