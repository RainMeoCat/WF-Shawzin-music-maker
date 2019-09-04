

function copySong(){
    const input = document.querySelector('#SongString');
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('複製成功');
        $("[data-toggle='popover']").popover("toggle");
        setTimeout(function () {
            $('.popover').popover('hide');
        }, 2000);
}}
$(function () { $("[data-toggle='tooltip']").tooltip(); });
var dialog={
    "dialog": [
      "哈囉!",
      "編曲編得如何？我可以聽嗎？",
      "記得休息，休息是為了農更多的赤毒",
      "喜歡的話可以去我的Github給個星星~",
      "記得去我的Youtube頻道訂閱喔!"
    ]
  }
  console.log(Math.floor(Math.random()*6))
L2Dwidget.init({
    dialog: {
      // 开启对话框
      enable: true,
      script: {
        // 每空闲 10 秒钟，显示一条一言
        'every idle 20s': '$hitokoto$',
        // 当触摸到星星图案
        'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
        // 当触摸到角色身体
        'tap body': '哎呀！别碰我！',
        // 当触摸到角色头部
        'tap face': '人家已经不是小孩子了！'
      }
    }
  });