import { Button } from "@components/ui/button";
import { useDraggable } from "@dnd-kit/react";

const DraggableTag = ({ tag, sectionId, ...props }) => {
  const { ref } = useDraggable({
    id: `${sectionId}:${tag}`, // unique id per tag
    data: { tag }, // carry the tag name on drop
  });
  console.log(useDraggable);
  return (
    <div
      className=" text-center select-none rounded-md border border-sidebar-border bg-sidebar px-2 py-1  text-xs font-medium text-sidebar-foreground hover:bg-sidebar-accent cursor-grab active:cursor-grabbing"
      ref={ref}
      {...props}
    >
      {/* < tagname > */}
      {`<${tag}>`}
    </div>
  );
};

export default DraggableTag;
