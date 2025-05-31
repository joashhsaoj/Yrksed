import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Secondary from "./general/secondary";
import Main from "./general/main";
import Mode from "./other/mode";
import StartAndStop from "./general/start-and-stop";

export default function Frame() {
  return (
    <Tabs defaultValue="general" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="deafault">Default</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <Card>
          <CardHeader>
            {/* <CardTitle></CardTitle> */}
            <CardDescription>
              <Secondary />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Main />
          </CardContent>
          <CardFooter>
            <StartAndStop />
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="deafault">
        <Card>
          <CardHeader>
            {/* <CardTitle></CardTitle>
            <CardDescription></CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current deafault</Label>
              <Input id="current" type="deafault" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New deafault</Label>
              <Input id="new" type="deafault" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save deafault</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="other">
        <Card>
          <CardHeader>
            <CardTitle>
              <Mode />
            </CardTitle>
            <CardDescription>
              <div className="flex items-center space-x-2">
                <Input placeholder="Enter ID; Random if Blank." />
                <Button>OK</Button>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current other</Label>
              <Input id="current" type="other" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New other</Label>
              <Input id="new" type="other" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save other</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
