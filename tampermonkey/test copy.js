document.addEventListener("click", function (event) {
  const element = document.querySelector(".manageUser_DelAll");
  // 如果元素存在且点击的不是元素内部
  if (element && !element.contains(event.target)) {
    element.remove();
  }
});

var htmlstr =
  "<div class='inroom_zone' style='text-align: center;'>" +
  "<div>" +
  "</p>" +
  "<button id='manageUser_Del' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>删除</button><br/>" +
  "<button id='manageUser_ShowInfo' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>在线记录</button><br/>" +
  "<button id='manageUser_doBlack' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>拉黑</button><br/>" +
  "<button id='manageUser_warningReport' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>举报</button><br/>" +
  // 删除以下行以排除按钮
  "</div>" +
  "</div>";

// 注意：如果生成元素的按钮会触发此事件，需在生成后立即阻止事件冒泡
document
  .getElementById("yourTriggerButtonId")
  .addEventListener("click", function (e) {
    e.stopPropagation(); // 防止触发上面的关闭逻辑
    // 生成元素的代码...
  });
