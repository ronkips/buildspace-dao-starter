import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x73938eFe4c0FFF87fF4DF1fDD1b204177992bFB4");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "simple cartoon",
        description: "This NFT will give you access to KipDAO!",
        image: readFileSync("scripts/assets/kip.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error(" Sorry failed to create the new NFT", error);
  }
})();