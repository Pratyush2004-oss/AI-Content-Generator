"use client";

import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/Schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import { ClipboardTypeIcon } from "lucide-react";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  CreatedAt: string;
}

async function History() {
  const user = await currentUser();

  {/* @ts-ignore */}
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AiOutput)
    .where(eq(AiOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AiOutput.id));

  const GetTemplateName = (slug: string) => {
    const template:TEMPLATE | any = Templates?.find((item) => item.slug == slug);
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">HISTORY</h2>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>Word</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item:HISTORY,idx:number) => (
        <>
        <div className="grid grid-cols-7 my-5 p-3" key={idx}>
          <h2 className="col-span-2 fex gap-2 items-center">
            <Image src={GetTemplateName(item?.templateSlug)?.icon} alt={"icon"} width={25} height={25}/>
            {GetTemplateName(item?.templateSlug)?.name}
           </h2>
           <h2 className="col-span-2 text-justify line-clamp-3">{item?.aiResponse}</h2>
           <h2>{item?.CreatedAt}</h2>
           <h2>{item?.aiResponse.length}</h2>
           <h2>
            <Button variant={'ghost'} className="text-primary"
            onClick={() => navigator.clipboard.writeText(item?.aiResponse)}
            ><ClipboardTypeIcon/> </Button>
           </h2>

        </div>
        </>
      ))}
    </div>
  );
}

export default History;
