// const oldUserMode = localStorage.getItem("userMode");
// if (oldUserMode !== event.data.data) {
//   localStorage.setItem("userMode", event.data.data); // console.log(event.data);
//   window.location.reload();
// }

$(".title-center-roomcmd").remove();
$("#msg_tips").remove();
$("#theme_sun_moon").remove();
$("#colorpicker").remove();

window.haveTitleTips = (msg) => {
  if (msg == "新私信") {
    if (!isFocus && !tick_titletips) {
      tick_titletips = setInterval(() => {
        if (document.title.indexOf(msg) == -1) {
          document.title = "[" + msg + "]-匿名聊";
        } else {
          document.title = "[deskry]-匿名聊";
        }
        if (isFocus) {
          clearInterval(tick_titletips);
          tick_titletips = null;
          document.title = "匿名聊";
        }
      }, 500);
    }
    haveSoundTips();
  }
};

if ($.cookie("isMoon") !== 1) {
  $("#theme_sun_moon").click();
}
// $("#manageUser_DelAll").remove();
$("#manageUser_DelAll").addEventListener("click", function (event) {
  console.log("删除所有用户");
});

// else if (localStorage.getItem("mode") === "origin") { //  $("#btn_xf").click(); //  $(".layui-layer-btn0").click(); // }

// var originalOnMessage = ws.onmessage;
// var data;

// ws.onmessage = function (e) {
//  if (originalOnMessage) {
//   originalOnMessage(e);
//  }
//  data = $.parseJSON(e.data);
//  // console.log(data);
// };
// sendJson("random", "", true);
// if (data.code == 15) {
//  console.log(data);
// }

// // if ($("#inp_nickname_other").val() != USERNAME) {
// //   sendJson("chgname", USERNAME, true);
// // }

// console.log($.cookie("userSex"));

// if (
// $("#inp_nickname_other").val() != USERNAME ||
// $.cookie("userSex") != "男"
// ) {
//   (function () {
//     let checkSendJson = setInterval(function () {
//       if (typeof sendJson === "function") {
//         clearInterval(checkSendJson);
//         sendJson("chgname", USERNAME, true);
//         $('.layui-form-radio:contains("男")').trigger("click"); // location.reload();
//       }
//     }, 500); // 每 500ms 检测一次
//   })();
// }
// window.addEventListener("load", function () { //  console.log("页面已完全加载"); //  sendJson("chgname", "666", true); // });

// else if (localStorage.getItem("mode") === "origin") { //  $("#btn_xf").click(); //  $(".layui-layer-btn0").click(); // }

// // if ($("#inp_nickname_other").val() != USERNAME) {
// //   sendJson("chgname", USERNAME, true);
// // }

// console.log($.cookie("userSex"));

// if (
// $("#inp_nickname_other").val() != USERNAME ||
// $.cookie("userSex") != "男"
// ) {
//   (function () {
//     let checkSendJson = setInterval(function () {
//       if (typeof sendJson === "function") {
//         clearInterval(checkSendJson);
//         sendJson("chgname", USERNAME, true);
//         $('.layui-form-radio:contains("男")').trigger("click"); // location.reload();
//       }
//     }, 500); // 每 500ms 检测一次
//   })();
// }
// window.addEventListener("load", function () { //  console.log("页面已完全加载"); //  sendJson("chgname", "666", true); // });

// if ($.cookie("userSex") != "男") {
//  $('.layui-form-radio:contains("男")').trigger("click");
// }

//获取当前的用户id
// sendJson("random", "", true);

var gendersChecked = {
  male: userMode !== "origin",
  female: !["default", "origin"].includes(userMode),
  unknown: userMode !== "origin",
};
