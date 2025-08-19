import { createContext, useState } from "react";

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

import Main from "./general/content/main";
import StartAndStop from "./general/footer/start-and-stop";
import Secondary from "./general/head/secondary";
import UserMode from "./other/user-mode";

export const UserModeContext = createContext(undefined);

export default function Frame() {
  const [userMode] = useState();
  return (
    <UserModeContext.Provider value={userMode}>
      <Tabs defaultValue="general" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="default">Default</TabsTrigger>
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
        <TabsContent value="default">
          <Card>
            <CardHeader>
              {/* <CardTitle></CardTitle>
            <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current default</Label>
                <Input id="current" type="default" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New default</Label>
                <Input id="new" type="default" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save default</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="other">
          <Card>
            <CardHeader>
              <CardTitle>
                <UserMode />
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
    </UserModeContext.Provider>
  );
}
