RegisterNuiCallbackType("createCharacter");
on("__cfx_nui:createCharacter", (charData) => {
  emitNet("MP-Base:server:createCharacter", charData);
  console.log("__cfx_nui:createCharacter", charData);
});

RegisterNuiCallbackType("selectCharacter");
on("__cfx_nui:selectCharacter", (data: { cid: number }, cb: Function) => {
  emitNet("MP-Base:Char:ServerSelect", data.cid);
  cb({ success: true });
  console.log("__cfx_nui:selectCharacter", data);
});

RegisterNuiCallbackType("deleteCharacter");
on("__cfx_nui:deleteCharacter", (charData) => {
  try {
    console.log("Emitting deleteChar event with data:", charData);
    emitNet("MP-Base:deleteChar", charData);
  } catch (err) {
    console.error("Error in deleteCharacter:", err);
  }
});
