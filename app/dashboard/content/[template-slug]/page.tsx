"use client";

import React from "react";
import FormSection from "../_Components/FormSection";
import OutputSection from "../_Components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewCotent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const GenerateAIContent = (FormData: any) => {};

  return (
    <div className="p-10">
      <Link href={'/dashboard'}>
      <Button className="bg-purple-600"> <ArrowLeft/> Back </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => console.log(v)}
        />

        {/* Output Setion */}
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateNewCotent;