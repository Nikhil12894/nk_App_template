import { Button, Slider } from "@mantine/core";
import { useState } from "react";

const Landing = () => {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <Button className="bg-slate-800" size="sm">
            Tailwind button
          </Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: "xs" },
                { value: 25, label: "sm" },
                { value: 50, label: "md" },
                { value: 75, label: "lg" },
                { value: 100, label: "xl" },
              ]}
            />
            <div className="pt-8  text-slate-800 dark:text-white">
              onChange value: {value}
            </div>
            <div className=" text-slate-800 dark:text-white">
              onChangeEnd value:{endValue}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
