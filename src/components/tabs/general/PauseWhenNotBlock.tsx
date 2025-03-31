import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function PauseWhenNotBlock() {
  return (
    <div className="flex justify-between p-2">
      <Label htmlFor="pause-when-no-block">Pause when not Block.</Label>
      <Switch id="pause-when-no-block" />
    </div>
  );
}
