import { Children, ElementType, ReactNode, useState } from "react";
import Button from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  Icon?: ElementType;
  visibleItemCount?: number;
};

const LargeSidebarSection: React.FC<LargeSidebarSectionProps> = ({
  children,
  title,
  Icon,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && (
        <div className="ml-4 mt-2 text-lg mb-1 flex items-center gap-2 flex-shrink-0">
          <div>{title}</div>
          {Icon && <Icon className="size-4" />}
        </div>
      )}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3">
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
};

export default LargeSidebarSection;
