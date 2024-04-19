import { Menu } from "lucide-react";
import Button from "./Button";
import logo from "../assets/react.svg"
import { useSidebarContext } from "../hooks/UseSidebarContext";

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  );
}
