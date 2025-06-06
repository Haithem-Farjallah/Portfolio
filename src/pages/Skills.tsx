import React from "react";
import Curve from "../components/shared/curve/Curve";
import { techStack } from "../components/data/Skills.ts";
import { IoCubeOutline } from "react-icons/io5";

const Skills: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  const filteredTechStack = techStack
    .map((stack) => ({
      ...stack,
      items: stack.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((stack) => stack.items.length > 0);

  return (
    <>
      <Curve />
      <div className="pt-24  min-h-screen ">
        <div className="container max-w-7xl mx-auto p-5">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-[#545557] bg-transparent w-full h-12 rounded-xl px-5 text-lg placeholder:text-[#4e4e4e] transform duration-300 outline-none focus:shadow-md"
          />

          <div className="space-y-12">
            {filteredTechStack.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] gap-5   text-center text-lg ">
                <IoCubeOutline size="66" />
                <h1 className="text-xl tracking-wider">
                  Could not find anything...
                </h1>{" "}
              </div>
            ) : (
              filteredTechStack.map((stack, index) => (
                <div key={index}>
                  <div className="flex items-center gap-5 my-12">
                    <div className="bg-[#545557] h-[1px] w-[20px]" />
                    <h1 className="text-[#545557] text-lg">{stack.category}</h1>
                    <div className="flex-1 bg-[#545557] h-[1px]" />
                  </div>

                  <div className="flex flex-wrap gap-6">
                    {stack.items.map((item, i) => (
                      <div
                        key={i}
                        className="relative flex items-center px-8 py-5 sm:w-full md:w-1/2 lg:w-[32%] border border-[#1e1e1e]  rounded-lg shadow-lg overflow-hidden"
                      >
                        <span className="text-xl font-light">{item.name}</span>

                        <div className="absolute right-0 h-24 w-40 ">
                          <img
                            src={item.image}
                            alt="Tech Logo"
                            className="h-full w-full object-cover object-center dark:brightness-75"
                            style={{
                              WebkitMaskImage:
                                "linear-gradient(to left, black 20%, transparent 100%)",
                              maskImage:
                                "linear-gradient(to left, black 50%, transparent 100%)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
