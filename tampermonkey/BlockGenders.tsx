// import { useEffect, useState } from "react";

// import useLocalStorage from "@/hooks/useLocalStorage";

// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

// export default function BlockGenders() {
//   const [mode] = useLocalStorage("mode");

//   const genders = [
//     { id: "male", label: "Male" },
//     { id: "female", label: "Female" },
//     { id: "unknown", label: "Unknown" },
//   ] as const;

//   type GendersChecked = Record<"male" | "female" | "unknown", boolean>;
//   const [gendersChecked, setGendersChecked] = useState<GendersChecked>({
//     male: mode !== "origin",
//     female: !["default", "origin"].includes(mode),
//     unknown: mode !== "origin",
//   });

//   useEffect(() => {
//     window.parent.postMessage(
//       {
//         genders: gendersChecked,
//       },
//       "*"
//     );
//   }, [gendersChecked]);

//   return (
//     <div className="flex flex-col gap-2 p-2">
//       <p>Block Genders</p>
//       <div className="flex justify-between">
//         {genders.map(({ id, label }) => (
//           // ......
//           <div key={id} className="flex items-center space-x-2">
//             {/* ...... */}
//             <Checkbox
//               checked={gendersChecked[id]}
//               id={id}
//               onCheckedChange={() =>
//                 setGendersChecked((prev) => ({ ...prev, [id]: !prev[id] }))
//               }
//             />
//             <Label htmlFor={id}>{label}</Label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
