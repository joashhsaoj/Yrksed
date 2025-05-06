// 示例：向 Tampermonkey 发送消息
window.parent.postMessage(
  { type: "FROM_NEXTJS", data: "Hello Tampermonkey!" },
  "*"
);
