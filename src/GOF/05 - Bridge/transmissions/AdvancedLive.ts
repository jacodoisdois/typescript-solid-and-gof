import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {

    console.log("Subtitles enabled on transmission!");

  }

  comments(): void {

    console.log("Comments enabled on transmission!");

  }


}