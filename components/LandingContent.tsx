"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testmonials = [
    {
      name: "Joel",
      avatar: "J",
      title: "Software Engineer",
      description: "This is the best application I've ever used!",
    },
    {
      name: "Antonio",
      avatar: "A",
      title: "Designer",
      description: "I use this daily for generating new photos!",
    },
    {
      name: "Mark",
      avatar: "M",
      title: "CEO",
      description: "This app has changed my life, cannot imagine working without it!",
    },
    {
      name: "Mary",
      avatar: "M",
      title: "CFO",
      description: "The best in class, definitely worth the premium subscription!",
    },
  ];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testmonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testmonials.map((testmonial)=>(
            <Card key={testmonial.name} className="bg-[#192339] border-none text-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-x-2">
                        <div className="">
                            <p className="text-lg">{testmonial.name}</p>
                            <p className="text-zinc-400 text-sm">{testmonial.title}</p>
                            {/* <p>{testmonial.description}</p> */}
                        </div>
                    </CardTitle>
                    <CardContent className="pt-4 px-0">
                        {testmonial.description}
                    </CardContent>
                </CardHeader>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
