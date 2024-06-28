"use client";

import { Button } from "@/components/ui/button";
import { AiOutput } from "@/utils/Schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect } from "react";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";

function UsageTrack() {
  const { user } = useUser();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);

  useEffect(() => {
    user && GetData();
  }, [user]);  

  const GetData = async () => {
    {/* @ts-ignore */}
    const result: HISTORY[] = await db
      .select()
      .from(AiOutput)
      .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total:number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-purple-400 w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: (totalUsage / 25000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="my-2 text-sm">{totalUsage}/25,000</h2>
        <Button variant={"secondary"} className="w-full text-primary">
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default UsageTrack;
