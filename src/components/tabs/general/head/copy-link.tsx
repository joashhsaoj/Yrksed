import { Button } from "@/components/ui/button";

export default function CopyLink() {
  return (
    <Button
      className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      onClick={() => {
        window.parent.postMessage({ type: "copyLink", data: true }, "*");
      }}
      onDoubleClick={() => {
        window.parent.postMessage({ type: "copyLink", data: false }, "*");
      }}
    >
      Copy Link
    </Button>
  );
}
