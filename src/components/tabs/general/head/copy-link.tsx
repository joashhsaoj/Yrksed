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
      onClick={() => {
        copyLink(
          `http://v1.web1v1.cn/randomdeskrynew.html?touserid=${info.id}&tousername=${info.name}`
        );
      }}
      onDoubleClick={() => {
        copyLink(`touserid=${info.id}&tousername=${info.name}`);
      }}
    >
      Copy Link
    </Button>
  );
}

export function copyLink(text: string): void {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      console.log("复制成功");
    } else {
      console.log("复制失败，请手动复制");
    }
  } catch (err) {
    console.log("复制异常: " + err);
  }

  document.body.removeChild(textarea);
}
