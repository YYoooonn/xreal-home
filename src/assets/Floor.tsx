import { Globals } from "@react-spring/three";
import { BlackTile, WhiteTile, ButtonTile, IconTile } from "./Tile";
import { SpringConfig } from "@react-spring/three";
import { CAT } from "@/constants/category";
import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/main";
import React from "react";

Globals.assign({ frameLoop: "always" });
/* TODO
Cannot call the manual advancement of rafz whilst frameLoop is not set as demand 
위 에러 메세지 해결 필요 */

const MIN_COLUMN = 2;
const MIN_ROW = 2;
const MAX_COLUMN = 10;
const MAX_ROW = 10;

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
      <WhiteTile position={[-2, 0, -2]} />
      <WhiteTile position={[-1, 0, 1]} />
      <WhiteTile position={[-1, 0, 0]} />
      <WhiteTile position={[1, 0, -1]} />
      <WhiteTile position={[1, 0, 0]} />
      <WhiteTile position={[2, 0, 2]} />
      <WhiteTile position={[2, 0, -2]} />
    </group>
  );
}

function IconTiles() {
  return (
    <group>
      <IconTile
        position={[-2, 0, 2]}
        type={CAT.Event}
        handler={() => console.log("Event1 clicked!")}
      />
      <IconTile
        position={[2, 0, 2]}
        type={CAT.JoinUs}
        handler={() => console.log("JoinUs1 clicked!")}
      />
      <IconTile
        position={[2, 0, -2]}
        type={CAT.Event}
        handler={() => console.log("Event2 clicked!")}
      />
      <IconTile
        position={[-2, 0, -2]}
        type={CAT.JoinUs}
        handler={() => console.log("JoinUs2 clicked!")}
      />
      <IconTile
        position={[0, 0, 0]}
        type={CAT.VR}
        handler={() => console.log("VR clicked!")}
      />
    </group>
  );
}

function Floor() {
  return (
    <>
      <BlackTiles />
      <ButtonTile />
      <WhiteTiles />
      <IconTiles />
    </>
  );
}

export default Floor;
