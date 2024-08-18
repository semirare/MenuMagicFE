"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Recipes from "./recipes/page";

const Home = () => {

  return (
    <div className="h-[100vh] flex-col bg-white">
      <Recipes />
    </div>
  );
}

export default Home;