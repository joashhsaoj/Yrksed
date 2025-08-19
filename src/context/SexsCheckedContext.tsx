// "use client";

// import useSessionStorage from "@/hooks/useSessionStorage";
// import { createContext, useState } from "react";

// export type SexsChecked = Record<"male" | "female" | "unknown", boolean>;
// const [userMode] = useSessionStorage("userMode"); // const [userMode] = useState("userMode"); // D

// const [sexsChecked, setSexsChecked] = useState<sexsChecked>({
//   male: userMode !== "origin",
//   female: !["default", "origin"].includes(userMode),
//   unknown: userMode !== "origin",
// });
// export const SexsCheckedContext = createContext({
//   sexsChecked,
//   setSexsChecked,
// });
