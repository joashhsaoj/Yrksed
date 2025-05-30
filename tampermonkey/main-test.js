// ==UserScript==
// @name     Load Next.js Project
// @namespace  http://tampermonkey.net/
// @version   0.1
// @description Load a Next.js project hosted on Vercel into the current page
// @author    Your Name
// @match    http://v1.70os.top/*
// @match    http://v1.chat1v1.cn/*
// @match    http://*.chatbbq.cn/*
// @match    http://v1.web1v1.cn/*
// @match    http://v2.henbaidu.com/*
// @match    http://v6.nm1v1.cn/*
// @match    http://v9.webttt.cn/*
// @match    https://v1.webliao.cn/*
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
  container.style.top = "0px";
  container.style.right = "0px";
  container.style.zIndex = "19991999";
  container.style.cursor = "move";
  container.style.width = "400px";
  container.style.height = "420px";
  container.style.top = "300px";
  container.style.right = "-350px";
  container.style.border = "5px solid black";
  container.style.overflow = "none"; //container.style.borderLeft = "10px solid black"; //container.style.borderBottom = "10px solid transparent"; //container.allow = "fullscreen; clipboard-read; clipboard-write";
  container.sandbox = "allow-scripts allow-same-origin allow-forms";

  const adjustContainerSize = () => {
    const body = container.contentDocument.body;

    container.style.width = `${body.scrollWidth + 10}px`;
    container.style.height = `${body.scrollHeight + 10}px`;
    console.log(`Width: ${container.style.width + 10}px`);
    console.log(`Height: ${container.style.height + 10}px`);
  };

  container.onload = () => {
    const resizeObserver = new ResizeObserver(adjustContainerSize);
    resizeObserver.observe(container.contentDocument.body);
  };

  let isDragging = false;
  let startX, startY;

  const startDrag = (e) => {
    isDragging = true;
    container.style.pointerEvents = "none"; // 暂时禁用鼠标事件
    startX = (e.clientX || e.touches[0].clientX) - container.offsetLeft;
    startY = (e.clientY || e.touches[0].clientY) - container.offsetTop;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", stopDrag);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      container.style.left =
        (e.clientX || e.touches[0].clientX) - startX + "px";
      container.style.top = (e.clientY || e.touches[0].clientY) - startY + "px";
    }
  };

  const stopDrag = () => {
    isDragging = false;
    container.style.pointerEvents = "auto"; // 恢复鼠标事件
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", stopDrag);
  };

  container.addEventListener("mousedown", startDrag);
  container.addEventListener("touchstart", startDrag);

  document.body.appendChild(container);

  const script = document.createElement("script");
  script.textContent = `
     $("#msg_tips").remove();
     $("#theme_sun_moon").remove();
     $("#colorpicker").remove();

     $.cookie("isMoon", 1, { expires: 365 });
     $("#themeChange").attr("href", "/css/random-black.css?v=1");
     $("body").css("background-color", "#414550");
     $.cookie("colorpicker", "#414550", { expires: 365 });

     //$.cookie("isSound", -1, { expires: 365 });
     //$("#msg_tips").attr("src", "/img/sys/sound_off.png");

     $('img[alt="nmchat.cn 匿名聊"]').remove();

     $("#AltInfo").remove();

     $(
      'div[style="text-align: center; line-height: 18px; letter-spacing: 2px; margin: 5px; margin-top: 0px; "]'
     ).remove();

     $("#SlideSysInfos").remove();
     $(
      'div[style="text-align: center; line-height: 18px; letter-spacing: 1px; margin: 5px; color: #BBB; font-size: 12px;"]'
     ).remove();
     $(".sysInfo").remove();

     //$("#user_count").remove(); //测试是否显示的好友变多
     $("#user_list").css("height", "90%");

     $("#manageUser_DelAll").remove()

     $("#area_VIP_Close").remove();
     $("#area_VIP_Close_btn").remove();

     function haveTitleTips(msg) {
      if (msg != "已匹配") {
       if (!isFocus && !tick_titletips) {
        //haveSoundTips();
        tick_titletips = setInterval(function () {
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
       } else if (!isFocus) {
        //haveSoundTips();
       }

       haveSoundTips();
      }
     }
         `;
  script.onload = () => {
    console.log("脚本加载成功");
  };
  script.onerror = () => {
    console.error("脚本加载失败");
  };
  document.head.appendChild(script);

  const mode_default = {
    "v1.web1v1.cn": ["d2119b8768f24906bf0b9f19fa90becd", "网调瘦弱骚b母🐶m"],

    "v2.chatbbq.cn": ["afcf520e69a44d59a26cf4bfe8e69fe0", "爱黑逼大陰唇大奶頭"],
    "v20.chatbbq.cn": [
      "afcf520e69a44d59a26cf4bfe8e69fe0",
      "爱黑逼大陰唇大奶頭",
    ],
    "v5.chatbbq.cn": ["a9308ef533c94cbe83ecebb917dbf54c", "爱黑逼大陰唇大奶頭"],
    "v50.chatbbq.cn": [
      "a9308ef533c94cbe83ecebb917dbf54c",
      "爱黑逼大陰唇大奶頭",
    ],

    "v3.chatbbq.cn": [
      "4db5c82fe67444fc80e391a7e03be901",
      "喜瘦苗条小奶贫乳骚b",
    ],
    "v30.chatbbq.cn": [
      "4db5c82fe67444fc80e391a7e03be901",
      "喜瘦苗条小奶贫乳骚b",
    ],
    "v4.chatbbq.cn": [
      "d778bb9a097a4836a773bb0a41295b9b",
      "主动发露点照才算搔b",
    ],
    "v40.chatbbq.cn": [
      "d778bb9a097a4836a773bb0a41295b9b",
      "主动发露点照才算搔b",
    ],

    // "v5.chatbbq.cn": ["a9308ef533c94cbe83ecebb917dbf54c", "骚b学生女m自觉发照"],
    // "v50.chatbbq.cn": [
    //   "a9308ef533c94cbe83ecebb917dbf54c",
    //   "骚b学生女m自觉发照",
    // ],

    "v6.chatbbq.cn": [
      "08657a5149a948cfadada6e4443df049",
      "看原相机拍的奶子骚b",
    ],
    "v60.chatbbq.cn": ["08657a5149a948cfadada6e4443df049", "爱黑b大陰唇大奶頭"],

    "v7.chatbbq.cn": [
      "26305d8416b64f7c92c4b3b5a5c97943",
      "挖掘能露点的烧货学牲",
    ],
    "v70.chatbbq.cn": [
      "26305d8416b64f7c92c4b3b5a5c97943",
      "挖掘能露点的烧货学牲",
    ],

    "v8.chatbbq.cn": [
      "94b3b7cafcca4f359565a83bc936a0fb",
      "贫乳小胸飞机场收留处",
    ],
    "v80.chatbbq.cn": [
      "94b3b7cafcca4f359565a83bc936a0fb",
      "贫乳小胸飞机场收留处",
    ],

    "v9.chatbbq.cn": [
      "410120c844d04205a2aa2d2b55e70299",
      "开发驯化返图贱b母畜",
    ],

    "v1.chatbbq.cn": ["67a1309666a6499882a025a5a79a17a3", "口爆內射学牲搔货mg"],

    "v11.chatbbq.cn": ["4db5c82fe67444fc80e391a7e03be901", "玩广东搔母g女学牲"], // "v12.chatbbq.cn": [ //  "", //  "找广东瘦弱学牲搔女m", // ], // "v13.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "推特接女m骚货投稿"], // "v12.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方搔b学牲母畜"], // "v12.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方搔b学牲母畜"], // "v12.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方搔b学牲母畜"], // "v12.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方搔b学牲母畜"], // "v12.chatbbq.cn": ["4fcfd77da90f4924a169f2a2b07a26ad", "玩南方搔b学牲母畜"],
  };
  const mode_zhegou = {
    "v1.web1v1.cn": ["dd68e3fa6fea4f9eaaa499583feaa123", "泥头车撞飞浙狗双亲"],
    "v2.chatbbq.cn": [
      "68905fb5d3164bbdbfd5bb9111eb88b8",
      "肆意屠刹浙狗全+乐色",
    ],
    "v20.chatbbq.cn": [
      "68905fb5d3164bbdbfd5bb9111eb88b8",
      "肆意屠刹浙狗全+乐色",
    ],
    "v3.chatbbq.cn": [
      "a861b901e8343872ce3bef3f072c23b7",
      "浙狗亲馬输卵管注水银",
    ],
    "v30.chatbbq.cn": [
      "a861b901e8343872ce3bef3f072c23b7",
      "浙狗亲馬输卵管注水银",
    ],
    "v4.chatbbq.cn": [
      "693181aa030d73df815f0530a3fabbb4",
      "浙狗亲嗎村里麦b被抓",
    ],
    "v40.chatbbq.cn": [
      "693181aa030d73df815f0530a3fabbb4",
      "浙狗亲嗎村里麦b被抓",
    ],
    "v5.chatbbq.cn": [
      "0e131d9c327f4506bb8738caa0e334d6",
      "浙狗亲嗎被压路机碾碎",
    ],
    "v5.chatbbq.cn": [
      "0e131d9c327f4506bb8738caa0e334d6",
      "浙狗亲嗎被压路机碾碎",
    ],
  };
  const mode_maren = {
    "v1.web1v1.cn": [
      "4ba324f3bbd946a38927c54b0239c9ff",
      "駡人木狗你媽今晚必死",
    ],
    "v2.chatbbq.cn": [
      "30fd6265b2bc4e8a8ea1f473f1881c65",
      "虐殺駡人贱木狗骚亲母",
    ],
    "v20.chatbbq.cn": [
      "30fd6265b2bc4e8a8ea1f473f1881c65",
      "虐殺駡人贱木狗骚亲母",
    ],
    "v3.chatbbq.cn": [
      "aba230e34ea1412687adc9e5f136bb77",
      "駡人賤木狗你母死絕啦",
    ],
    "v30.chatbbq.cn": [
      "aba230e34ea1412687adc9e5f136bb77",
      "駡人賤木狗你母死絕啦",
    ],
    "v4.chatbbq.cn": [
      "4c87e7163a1046af8c3c019f20ddf11c",
      "拳交駡人目狗亲母子宫",
    ],
    "v40.chatbbq.cn": [
      "4c87e7163a1046af8c3c019f20ddf11c",
      "拳交駡人目狗亲母子宫",
    ],
    "v5.chatbbq.cn": [
      "a4d3115a5f8a4b9695d6768a9f92b4b5",
      "肢解碎尸駡人木狗亲母",
    ],
    "v5.chatbbq.cn": [
      "a4d3115a5f8a4b9695d6768a9f92b4b5",
      "肢解碎尸駡人木狗亲母",
    ],
  };

  const mode = localStorage.getItem("mode");

  const modeMap = {
    default: mode_default,
    zhegou: mode_zhegou,
    maren: mode_maren,
  };

  if (mode && modeMap[mode]) {
    var [ID, USERNAME] = modeMap[mode][window.location.hostname] || ["", ""];

    if (
      $.cookie("user_id") !== ID ||
      $.cookie("user_nickname_random") != USERNAME ||
      $.cookie("userSex") !== "男"
    ) {
      $.cookie("user_id", ID, { expires: 365 });
      $.cookie("user_nickname_random", USERNAME, { expires: 365 });
      $.cookie("userSex", "男", { expires: 365 });
      window.location.reload();
    }
  }

  var genders;

  // var dic_userlists = {};

  ws.close();

  const OriginalWebSocket = window.WebSocket;
  // 覆盖 WebSocket 构造函数
  window.WebSocket = function (url, protocols) {
    console.log("油猴脚本: 正在创建新的 WebSocket 连接:", url);

    const ws = new OriginalWebSocket(url, protocols); // 创建原始的 WebSocket 实例

    var code;

    // 为这个 WebSocket 实例添加 'message' 事件监听器
    ws.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      console.log("油猴脚本: 收到 WebSocket 消息:", data); // 可以用于调试

      if (data && data.code === 15) {
        console.log(data.sel_userSex);
        if (
          (data.sel_userSex === "男" && genders.male) ||
          (data.sel_userSex === "女" && genders.female) ||
          (data.sel_userSex === "保密" && genders.unknown)
        ) {
          warning_Black();
          $(".layui-layer-btn0").click();
        }
        container.contentWindow.postMessage(
          {
            type: "F",
            data: {
              name: data.sel_userNikename,
              gender: data.sel_userSex,
              age: data.sel_userAge,
              location: data.sel_userAddress,
            },
          },
          "https://yrksed.vercel.app"
        );
        // console.log(
        //   "油猴脚本: 通过 WebSocket 检测到用户匹配消息 (对应 code 15)！"
        //   // data
        // );
        if (data.sel_userSex === "女") {
          $(`#userid_${sel_userid}`).find(".nickname").css("color", "red");
        }
        // if (data.sel_userSex == "女") {
        //  setTimeout(() => {
        //   $(`#userid_${sel_userid}`).find(".nickname").css("color", "red");
        //  }, 200);
      }
      // 您还可以检查 random_queue_get_random_getID 可能处理的特定数据结构，例如：
      // if (data && data.command === 'random_queue_get_random_getID') {
      //    console.log('油猴脚本: WebSocket 消息触发了 random_queue_get_random_getID 逻辑！', data);
      // }
    });

    return ws; // 返回修改后的 WebSocket 实例
  };

  console.log("油猴脚本: WebSocket 构造函数已成功覆盖。");

  let intervalId = null;
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin === "https://yrksed.vercel.app") {
        if (event.data.mode) {
          localStorage.setItem("mode", event.data.mode);
        }
        if (event.data.genders) {
          genders = event.data.genders; // console.log(genders);
        }
        if (event.data.state === "START") {
          intervalId = setInterval(() => {
            // console.log(event.data);
            // if (gender == "女") { //  container.contentWindow.postMessage( //   { name: name, age: age, location: location }, //   "https://nmchat.vercel.app" //  ); //  //console.log("name: " + name + " | gender: " + gender + " | age: " + age + " | location: " + location); //  // console.log( //  //  "name: " + name + " | age: " + age + " | location: " + location //  // ); // }
            sendJson("random", "", true);
            console.log(ws);
            // console.log(event.data);
          }, 1000);
        } else if (event.data.state === "STOP") {
          if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      }
    },
    false
  );
})();

//test

// //$("#ButtonRandom").click()
// //$("#btn_random").click();
// sendJson("random", "", true);
// console.log(selUserInfo); //无用

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

/*
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

// setTimeout(() => {
//  $(`#userid_${sel_userid}`)
//   .find(".nickname")
//   .css("color", json.sel_userSex == "女" ? "red" : "blue");
//  console.log(json.sel_userSex == "女" ? "女" : "非女");
// }, 100);

// if (json.sel_userSex == "女") {
//  setTimeout(() => {
//   $(`#userid_${sel_userid}`).find(".nickname").css("color", "red");
//  }, 200);
// } else {
//  setTimeout(() => {
//   $(`#userid_${sel_userid}`).find(".nickname").css("color", "blue");
//  }, 200);
// }

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

//曾经匹配过的列表
//console.log(dic_userlist);
