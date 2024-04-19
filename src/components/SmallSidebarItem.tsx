import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

export type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem: React.FC<SmallSidebarItemProps> = ({ Icon, title, url }) => {
  return (
    <a
      href={url}
      className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
      <Icon className="size-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};

export default SmallSidebarItem
