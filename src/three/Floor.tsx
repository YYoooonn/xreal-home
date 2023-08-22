import { Globals } from "@react-spring/three";
import { IconTile, IconTileWrapper, TileInstances } from "./Tile";
import { CAT } from "@/constants/category";
import CatIcon from "./CatIcon";
import Button from "./Button";
import ProIcons from "./ProIcon";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import React from "react";

Globals.assign({ frameLoop: "always" });
/* TODO
Cannot call the manual advancement of rafz whilst frameLoop is not set as demand 
위 에러 메세지 해결 필요 */

function ButtonTile() {
  return (
    <IconTileWrapper position={[0, 0, 0]} isWhite={true}>
      <CatIcon type={CAT.Xreal} position={[0, 0.1, 0]} />
      <Button position={[0, 0, 0]} />
    </IconTileWrapper>
  );
}

const IconTiles = React.memo(({ removeButton }: { removeButton?: boolean }) => {
  const Center = removeButton ? (
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
});
IconTiles.displayName = "IconTiles";

function AdditionalTiles() {
  const { status } = useStatus();
  return (
    <>
      {status === StatusEnum.Project && <TileInstances isAdditional={true} />}
    </>
  );
}

function Floor(props: { removeButton?: boolean }) {
  return (
    <>
      <TileInstances isAdditional={false} />
      <ProIcons />
      <IconTiles {...props} />
      <AdditionalTiles />
    </>
  );
}

export default Floor;
