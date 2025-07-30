import { Button } from "@/components/ui/button";

export default function BlockUser() {
  return (
    <Button
      className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="destructive"
    >
      Block User
    </Button>
  );
}
