// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";

// type GendersChecked = Record<"male" | "female" | "unknown", boolean>;

// interface BlockGendersProps {
//   gendersChecked: GendersChecked;
//   setGendersChecked: React.Dispatch<React.SetStateAction<GendersChecked>>;
// }

// export default function BlockGenders({
//   gendersChecked,
//   setGendersChecked,
// }: BlockGendersProps) {
//   const genders = [
//     { id: "male", label: "Male" },
//     { id: "female", label: "Female" },
//     { id: "unknown", label: "Unknown" },
//   ] as const;

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
