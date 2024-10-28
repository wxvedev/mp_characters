import ICharacter from "types/character";

RegisterNuiCallbackType("createCharacter");
on("__cfx_nui:createCharacter", (charData) => {
  console.log("NUI CALLBACK createCharacter: Passed.");
  emitNet("MP-Base:server:createCharacter", charData);
});

RegisterNuiCallbackType("selectCharacter");
on("__cfx_nui:selectCharacter", (data: { cid: number }, cb: Function) => {
  emitNet("MP-Base:Char:ServerSelect", data.cid);
  cb({ success: true });
});

RegisterNuiCallbackType("deleteCharacter");
on(
  "__cfx_nui:deleteCharacter",
  ({ charData }: { charData: ICharacter }, cb: Function) => {
    emitNet("MP-Base:deleteChar", JSON.parse(JSON.stringify(charData)));
    cb({ success: true });
  }
);
