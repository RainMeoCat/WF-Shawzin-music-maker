var tab=document.getElementById('SongTable')
window.onload = function () {
  $(function () { $("[data-toggle='tooltip']").tooltip(); });
};



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
    "其實我的每隻戰甲都有買TennoGEN喔d(`･∀･)b",
    "這隻貓貓的插件叫live2dwidget，Github有喔~",
    "其實我很不喜歡去提款機領錢的感覺，明明才領一張，他卻數得好像幾十張一樣",
    "研究顯示，常熬夜上網的人，通常比較容易胖，因為大家都在發宵夜文，一不小心又餓了",
    "愛吃又沒錯，錯的是食物，為什麼這麼容易害人胖",
    "我最討厭別人浪費我時間了，畢竟我自己浪費都不夠了",

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
tab.rows[0].cells[0].style.background = "red";
window.document.body.onbeforeunload = function () {
  return '';
}