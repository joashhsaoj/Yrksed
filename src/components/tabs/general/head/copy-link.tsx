"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CopyLink() {
  const [info, setInfo] = useState({ id: "", name: "" });

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "currentUser") {
        setInfo(event.data.data);
      }
    });
  }, []);

  return (
    <Button
      className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      onClick={async () => {
        await navigator.clipboard.writeText(
          `http://v1.chatbbq.cn/randomdeskrynew.html?touserid=${info.id}&tousername=${info.name}`
        );
        alert("复制成功");
      }}
      onDoubleClick={async () => {
        await navigator.clipboard.writeText("复制到剪贴板的内容");
        alert("复制成功");
      }}
    >
      Copy Link
    </Button>
  );
}
