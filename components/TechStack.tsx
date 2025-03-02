"use client";

import { skills } from "@/data";
import { Button } from "./ui/MovingBorders";

const TechStack = () => {
    return (
      <div className="py-20">
        <h1 className="heading">
          My <span className="text-purple">Tech Stack</span>
        </h1>
  
        {/* Grid container ensures items take up full space */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {skills.map((item, index) => (
            <div className="w-full" key={index}>
                <div
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                      borderRadius: `15px`,
                    }}
                    className="flex flex-row items-center border-solid border-neutral-200 dark:border-slate-800 p-4 space-x-3">
                  <div className="border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center">
                    <img src={item.img} alt={item.name} className="p-2 w-10 h-10" />
                  </div>
                  <div className="lg:ms-3">
                    <span className="text-sm font-medium cursor-pointer text-purple">
                      {item.name}
                    </span>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  

export default TechStack;
