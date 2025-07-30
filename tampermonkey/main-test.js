// ==UserScript==
// @name     Load Next.js Project
// @namespace  http://tampermonkey.net/
// @version   0.1
// @description Load a Next.js project hosted on Vercel into the current page
// @author    Your Name
// @match    http://*.70os.top/*
// @match    http://*.chat1v1.cn/*
// @match    http://*/*
// @match    http://*.chatbbq.cn/*
// @match    http://*.henbaidu.com/*
// @match    http://*.nm1v1.cn/*
// @match    http://*.webttt.cn/*
// @match    https://*.webliao.cn/*
// @grant    none
// ==/UserScript==

(function () {
  "use strict"; // 检查是否在 iframe 内部运行

  if (window.self !== window.top) {
    return; // 如果在 iframe 内部运行，则退出脚本
  }

  const container = document.createElement("iframe");
  container.src = "https://yrksed.vercel.app";
  container.style.position = "fixed";
  container.style.top = "175px";
  container.style.right = "-75px";
  container.style.zIndex = "20000000";
  container.style.width = "420px";
  container.style.height = "400px";
  container.style.border = "5px solid black"; //   container.style.overflow = "hidden"; //container.style.borderLeft = "10px solid black"; //container.style.borderBottom = "10px solid transparent"; //container.allow = "fullscreen; clipboard-read; clipboard-write";

  let isDragging = false;
  let startX, startY;

  const startDrag = (e) => {
    e.preventDefault(); // 阻止默认行为（如触摸滚动）
    isDragging = true;
    container.style.pointerEvents = "none"; // 临时禁用 iframe 内部鼠标事件，防止阻塞拖动
    startX = e.clientX - container.offsetLeft;
    startY = e.clientY - container.offsetTop;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    container.style.left = e.clientX - startX + "px";
    container.style.top = e.clientY - startY + "px";
  };

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    container.style.pointerEvents = "auto"; // 恢复鼠标事件
  };

  container.addEventListener("pointerdown", startDrag);
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", stopDrag);
  document.addEventListener("pointercancel", stopDrag);

  document.body.appendChild(container);

  $("#msg_tips").remove();
  $("#theme_sun_moon").remove();
  $("#colorpicker").remove(); //---------------------------------------------------

  $.cookie("isMoon", 1, { expires: 365 });
  $("#themeChange").attr("href", "/css/random-black.css?v=1");
  $("body").css("background-color", "#414550");
  $.cookie("colorpicker", "#414550", { expires: 365 });

  $('img[alt="nmchat.cn 匿名聊"]').remove();
  $("#AltInfo").remove();

  $(
    'div[style="text-align: center; line-height: 18px; letter-spacing: 2px; margin: 5px; margin-top: 0px; "]'
  ).remove();
  $(
    'div[style="text-align: center; line-height: 18px; letter-spacing: 1px; margin: 5px; color: #BBB; font-size: 12px;"]'
  ).remove();

  $("#SlideSysInfos").remove();
  $(".sysInfo").remove();

  $("#user_list").css("height", "90%");
  $("#area_VIP_Close").remove();
  $("#area_VIP_Close_btn").remove(); //---------------------------------------------------

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

  const userMode = localStorage.getItem("userMode") ?? "default";

  const userModes = {
    default: {
      v1: ["410120c844d04205a2aa2d2b55e70299", "调小奶瘦弱骚b狗m"], //调瘦弱小胸骚b母🐶m
      v2: ["26305d8416b64f7c92c4b3b5a5c97943", "爱黑逼大陰唇大奶頭"],
      v3: ["94b3b7cafcca4f359565a83bc936a0fb", "主动发露点照才算騷货"],
      v4: ["4db5c82fe67444fc80e391a7e03be901", "喜瘦苗条小奶贫乳骚b"],
      v5: ["a9308ef533c94cbe83ecebb917dbf54c", "骚b学生女m自觉发照"],
      v6: ["d2119b8768f24906bf0b9f19fa90becd", "看原相机拍的奶子骚b"],
      v7: ["26305d8416b64f7c92c4b3b5a5c97943", "挖掘能露点的烧货学牲"],
      v8: ["94b3b7cafcca4f359565a83bc936a0fb", "贫乳小胸飞机场收留处"],
      v9: ["410120c844d04205a2aa2d2b55e70299", "开发驯化返图贱b母畜"],
      v11: ["67a1309666a6499882a025a5a79a17a3", "口爆內射学牲搔货mg"],
      v11: ["4db5c82fe67444fc80e391a7e03be901", "玩广东搔母g女学牲"], // "v12": [ //  "", //  "找广东瘦弱学牲搔女m", // ], // "v13": ["4fcfd77da90f4924a169f2a2b07a26ad", "推特接女m骚货投稿"], // "v12": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方骚b学牲母畜"], // "v12": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方骚b学牲母畜"], // "v12": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方骚b学牲母畜"], // "v12": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方骚b学牲母畜"], // "v12": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方骚b学牲母畜"],
    },
    zhegou: {
      v1: ["dd68e3fa6fea4f9eaaa499583feaa123", "泥头车撞飞浙狗双亲"],
      v2: ["68905fb5d3164bbdbfd5bb9111eb88b8", "肆意屠刹浙狗全+乐色"],
      v3: ["a861b901e8343872ce3bef3f072c23b7", "浙狗亲馬输卵管注水银"],
      v4: ["693181aa030d73df815f0530a3fabbb4", "浙狗亲嗎村里麦b被抓"],
      v5: ["0e131d9c327f4506bb8738caa0e334d6", "浙狗亲嗎被压路机碾碎"],
    },
    maren: {
      v1: ["4ba324f3bbd946a38927c54b0239c9ff", "駡人木狗你媽今晚必死"],
      v2: ["30fd6265b2bc4e8a8ea1f473f1881c65", "虐殺駡人贱木狗骚亲母"],
      v3: ["aba230e34ea1412687adc9e5f136bb77", "駡人賤木狗你母死絕啦"],
      v4: ["4c87e7163a1046af8c3c019f20ddf11c", "拳交駡人目狗亲母子宫"],
      v5: ["a4d3115a5f8a4b9695d6768a9f92b4b5", "肢解碎尸駡人木狗亲母"],
    },
  };

  var [ID, USERNAME, EXPIRES = 365] = userModes[userMode]?.[
    window.location.hostname.split(".")[0]
  ] ?? [null, null, -1];

  if (
    !userModes[userMode] ||
    $.cookie("user_id") !== ID ||
    $.cookie("user_nickname_random") !== USERNAME ||
    $.cookie("userSex") !== "男"
  ) {
    $.cookie("user_id", ID, { expires: EXPIRES });
    $.cookie("user_nickname_random", USERNAME, { expires: EXPIRES });
    $.cookie("userSex", "男", { expires: 365 });
    window.location.reload();
  }

  window.addEventListener("keydown", () => {
    // if (document.activeElement !== input) {
    $("#inp_say").focus();
    // }
  });

  document
    .getElementById("user_list")
    .addEventListener("click", function (event) {
      $("#inp_say").focus(); // event.preventDefault();// 如果需要阻止默认行为（比如阻止跳转）
      container.contentWindow.postMessage(
        {
          type: "currentUser",
          data: {
            id: sel_userid,
            name: event.target.textContent,
          },
        },
        "https://yrksed.vercel.app"
      );
    });

  // var dic_userlists = {};

  ws.close();

  var code;

  var gendersChecked;
  const OriginalWebSocket = window.WebSocket;
  // 覆盖 WebSocket 构造函数
  window.WebSocket = function (url, protocols) {
    console.log("油猴脚本: 正在创建新的 WebSocket 连接:", url);

    const ws = new OriginalWebSocket(url, protocols); // 创建原始的 WebSocket 实例
    // 为这个 WebSocket 实例添加 'message' 事件监听器
    ws.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      code = data.code;
      console.log("油猴脚本: 收到 WebSocket 消息:", data); // 可以用于调试

      if (data && data.code === 15) {
        if (data.sel_userSex === "女") {
          setTimeout(() => {
            $(`#userid_${data.sel_userid}`)
              .find(".nickname")
              .css("color", "red");
          }, 1);
        } else {
          setTimeout(() => {
            $(`#userid_${data.sel_userid}`).remove(); // $(`#userid_${data.sel_userid}`).find(".nickname").css("color", "blue");
          }, 1);
        }
        if (
          (data.sel_userSex === "男" && gendersChecked.male) ||
          (data.sel_userSex === "女" && gendersChecked.female) ||
          (data.sel_userSex === "保密" && gendersChecked.unknown)
        ) {
          sendJson("warningreport", data.sel_userid, true);
        }
      }
    });

    return ws; // 返回修改后的 WebSocket 实例
  };
  console.log("油猴脚本: WebSocket 构造函数已成功覆盖。");

  let intervalId = null;
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin === "https://yrksed.vercel.app") {
        switch (event.data.type) {
          case "userMode":
            if (localStorage.getItem("userMode") !== event.data.data) {
              window.location.reload();
            }
            localStorage.setItem("userMode", event.data.data);
            break;
          case "gendersChecked":
            gendersChecked = event.data.data;
            break;
          case "state":
            if (event.data.data) {
              intervalId = setInterval(() => {
                sendJson("random", "", true);
              }, 1500);
            } else {
              if (intervalId !== null) {
                clearInterval(intervalId);
                intervalId = null;
              }
            }
            //点击空白
            break;
          case "copyLink":
            break;
        }
      }
    },
    false
  );
})();

/*
//test

// //$("#ButtonRandom").click()
// //$("#btn_random").click();
// sendJson("random", "", true);
// console.log(selUserInfo); //匹配的用户信息

// ws.send(
//  JSON.stringify({ act: "random", id: $.cookie("user_id"), userAge: userAge })
// );

//去掉VIP遮罩
// $("#area_VIP_Close").remove();
// $("#area_VIP_Close_btn").remove();
// //
// $.cookie("switchvipsex", switchvipsex, { expires: 365 });
// $.cookie("switchVipAddress", switchVipAddress, { expires: 365 });

//注销
// $("#btn_xf").click();
// $(".layui-layer-btn0").click();

//拉黑
// $("#doBlack").click();
// $(".layui-layer-btn0").click();

//一开始就显示私聊界面
// $("#div_msgbox_first").hide();
// $("#div_privmsg").show();

// console.table([
//  { name: name, gender: gender, age: age, location: location },
// ]);

// case 7:
//  fun_fromusermsg(json);
//  break; //用户发送的新私信
//case 8: fun_getprivmsg(json); break;//获取私信内容

//当前点击的用户的找回id
// console.log(sel_userid);
// console.log(dic_userlist[sel_userid]);
// console.log($(`#userid_${sel_userid}`));

function fun_userchgsexaddress() {
  $.cookie("userSex", "男", { expires: 365 });
  $.cookie("address_show", address_show, { expires: 365 });
  $.cookie("switchvipsex", switchvipsex, { expires: 365 });
  $.cookie("switchVipAddress", switchVipAddress, { expires: 365 });

  $.cookie("switchHealthMode", switchHealthMode, { expires: 365 });

  layer.msg("信息修改成功", { time: 600 });
}

function fun_userchgsexaddress() {
  $.cookie("userSex", "男", { expires: 365 });
  $.cookie("address_show", address_show, { expires: 365 });
  $.cookie("switchvipsex", switchvipsex, { expires: 365 });
  $.cookie("switchVipAddress", switchVipAddress, { expires: 365 });

  $.cookie("switchHealthMode", switchHealthMode, { expires: 365 });

  layer.msg("信息修改成功", { time: 600 });
}
fun_userchgsexaddress()

$.cookie("userSex", userSex, { expires: 365 });
$.cookie("userSex") = "男";
if ($.cookie("userSex") != "男") {
  userSex = "男";
}
console.log($.cookie("userSex"));
*/

// switchvipsex = "1";
// console.log(switchvipsex);
// console.log($.cookie("switchvipsex"));
// $.cookie("switchvipsex", "1", { expires: 365 });

// randomVipCode = "vipali6458eb4edee1265071526072";

// sendJson(
//  "randomVIPinfoBind",
//  '{"randomvipcode":"' + randomVipCode + '"}',
//  true
// );

// $.cookie("randomVipCode");
// document.cookie =
//  "randomVipCode=vipali6458eb4edee1265071526072; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";

// function fun_setUserSexAdderss() {
//  fun_setUserAge();

//  if ($.cookie("address_show") == "true") {
//   $("#address_show").attr("checked", "checked");
//  } else {
//   $("#address_show").remove("checked");
//  }

//  $("[name=sex]").each(function (i, item) {
//   if ($(item).val() == $.cookie("userSex")) {
//    $(item).prop("checked", true);
//    layui.use("form", function () {
//     //var form = layui.form();
//     //form.render();
//    });
//   }
//  });

//  if ($.cookie("switchvipsex") == "1") {
//   $("#vip_sex").attr("checked", "checked");
//  } else {
//   $.cookie("switchvipsex", "0", { expires: 365 });
//   $("#vip_sex").remove("checked");
//  }

//  if ($.cookie("switchVipAddress") == "1") {
//   $("#vip_Address").attr("checked", "checked");
//  } else {
//   $.cookie("switchVipAddress", "0", { expires: 365 });
//   $("#vip_Address").remove("checked");
//  }

//  if ($.cookie("switchHealthMode") == "1") {
//   $("#health_mode").attr("checked", "checked");
//  } else {
//   $.cookie("switchHealthMode", "0", { expires: 365 });
//   $("#health_mode").remove("checked");
//  }
// }

// console.log(pri_BlackUserID); //私聊黑名单

//曾经匹配过的列表
//console.log(dic_userlist);*/
