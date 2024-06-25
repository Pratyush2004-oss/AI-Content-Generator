"use client"

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const DashBoard = () => {
  const [userSearchInput,setuserSearchInput] = useState<string>();
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setuserSearchInput(value)}/>

      {/* Template List Section  */}
      <TemplateListSection userSearchInput = {userSearchInput} />
    </div>
  );
};

export default DashBoard;
