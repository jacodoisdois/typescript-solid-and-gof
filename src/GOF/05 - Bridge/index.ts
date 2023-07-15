import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform) {
  console.log("Await...");

  const live = new Live(platform);

  live.broadcasting();
  live.result();

}

function startAdvancedLive(platform: IPlatform) {

  console.log("Await...");
  const live = new AdvancedLive(platform);

  live.broadcasting();
  live.result();
  live.subtitles();
  live.comments();
}

startLive(new Youtube());
startLive(new Twitch());

startAdvancedLive(new Twitch());

startLive(new Facebook());
startAdvancedLive(new Facebook());