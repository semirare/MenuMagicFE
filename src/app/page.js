"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Recipes from "./recipes/page";

const Home = () => {

  return (
    <div className="flex-1 flex flex-col bg-white">
      <Recipes />
    </div>
  );
}

export default Home;