// // if (sel_userid) {
// //   console.log(sel_userid);
// // } else {
// //   console.log("sel_userid is not defined");
// // }

// // let originalValue;

// // Object.defineProperty(window, "sel_userid", {
// //   get: function () {
// //     console.log("读取sel_userid:", originalValue);
// //     return originalValue;
// //   },
// //   set: function (newValue) {
// //     console.log("设置sel_userid:", newValue);
// //     originalValue = newValue;
// //     if (newValue !== undefined && newValue !== null) {
// //       // 变量存在时的逻辑
// //       possmessage(); // 调用自定义函数
// //     } else {
// //       // 变量不存在时的逻辑
// //       console.log("sel_userid不存在或值为空");
// //     }
// //   },
// // });

// // // 劫持目标变量
// // const targetVar = window.sel_userid; // 原变量备份
// // const proxy = new Proxy(targetVar, {
// //   set(obj, prop, value) {
// //     console.log(`变量${prop}被修改为：${value}`);
// //     obj[prop] = value; // 实际赋值
// //     if (prop === "targetKey") {
// //       // 监听特定属性
// //       triggerCustomEvent(); // 触发自定义操作
// //     }
// //     return true;
// //   },
// // });
// // window.sel_userid = proxy; // 覆盖原变量[1,2](@ref)

// // const handler = {
// //   set(target, prop, value) {
// //     if (prop === "sel_userid") {
// //       if (value !== undefined && value !== null) {
// //         executeA();
// //       } else {
// //         console.log("sel_userid被清空");
// //       }
// //     }
// //     target[prop] = value;
// //     return true;
// //   },
// // };
// // unsafeWindow = new Proxy(unsafeWindow, handler);

// // // const proxy = new Proxy(obj, {
// // //   set(target, prop, value) {
// // //     console.log(`属性 ${prop} 被修改为 ${value}`);
// // //     return Reflect.set(target, prop, value);
// // //   },
// // // });

// // 创建代理对象
// let proxySelUserId = new Proxy(window, {
//   set(target, prop, value) {
//     if (prop === "sel_userid") {
//       // 触发自定义事件
//       const event = new CustomEvent("selUserIdChanged", {
//         detail: { oldValue: target[prop], newValue: value },
//       });
//       window.dispatchEvent(event);
//     }
//     return Reflect.set(...arguments); // 默认赋值行为
//   },
// });

// // 监听自定义事件
// window.addEventListener("selUserIdChanged", (e) => {
//   console.log("值已变化:", e.detail.newValue);
// });

// document
//   .querySelectorAll(".barrage_box cl")
//   .forEach((element) => element.remove());

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     // 遍历新增的节点
//     mutation.addedNodes.forEach((node) => {
//       if (node.matches && node.matches("")) {
//         node.remove(); // 发现目标元素，立即移除
//       }
//     });
//   });
// });
// // 开始监听整个文档的子节点变化
// observer.observe(document, { childList: true, subtree: true });

// 创建观察器实例
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    $(mutation.addedNodes).each(function () {
      if ($(this).is(".barrage_box cl")) {
        $(this).remove(); // 立即移除新增的目标元素[9,10](@ref)
      }
    });
  });
});

// 开始监听整个文档的变化
observer.observe(document, {
  childList: true,
  subtree: true,
});

$(".barrage_box cl").remove(); // 移除现有的目标元素