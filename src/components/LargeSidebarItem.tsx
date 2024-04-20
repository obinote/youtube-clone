import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

const LargeSidebarItem: React.FC<LargeSidebarItemProps> = ({ IconOrImgUrl, title, url, isActive = false }) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}>
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="size-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="size-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
  );
};

export default LargeSidebarItem;
