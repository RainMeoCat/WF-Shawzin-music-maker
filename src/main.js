


$(function () { $("[data-toggle='tooltip']").tooltip(); });
var dialog = {
  "dialog": [
    "喵喵喵?",
    "編曲編得如何？我可以聽嗎？",
    "記得休息，休息是為了農更多的赤毒",
    "最強的DPS戰甲就是TITANIA了，不接受反駁◑ω◐",
    "其實雨喵我根本沒有音樂底子，還要問我學鋼琴的弟弟ˊwˋ",
    "我的WARFRAME ID:RainMeoCat 記得標上註解喔!",
    "最近好忙呀，沒有時間農இдஇ",
    "其實我也是很想彈一首Through The Fire And Flames呀｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡",
    "雨喵家的貓貓叫蛋蛋，是隻美國短毛貓(*´∀`)~♥",
    "其實我的每隻戰甲都有買TennoGEN喔d(`･∀･)b"
  ]
}
L2Dwidget.init({
  dialog: {
    enable: true,
    script: {
      'every idle 10s': '$hitokoto$',
      'hover .youtube': '我的Youtube頻道，記得訂閱喔!',
      'hover .bilibili': '我的Bilibili頻道，記得三連加關注~',
      'hover .github': '喜歡的話可以去我的Github給個星星~',

    }
  }
});
function create_hell_song() {
  const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const notes = "BRhJCSKEUkiM";
  const totalValues = Math.pow(data.length,2);
  let output = String(Math.floor(Math.random() * 7) + 1);
  for(let i = 0;i<100;i++) {
      output += notes[Math.floor(Math.random() * notes.length)];
      const c1 = data[Math.floor(i / data.length)];
      const c2 = data[i % data.length];
      output += c1 + c2;
  }
  document.getElementById("HellSongString").value=output
  const input = document.querySelector('#HellSongString');
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    console.log('複製成功');
    $("[data-toggle='HSSpopover']").popover("toggle");
    setTimeout(function () {
      $("[data-toggle='HSSpopover']").popover('hide');
    }, 2000);
  }
}
function copySong() {
  const input = document.querySelector('#SongString');
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    console.log('複製成功');
    $("[data-toggle='SSpopover']").popover("toggle");
    setTimeout(function () {
      $("[data-toggle='SSpopover']").popover('hide');
    }, 2000);
  }
}