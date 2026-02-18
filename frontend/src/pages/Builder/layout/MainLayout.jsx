import { useState } from "react";
import { usePanelRef } from "react-resizable-panels";
import { PanelLeftOpen } from "lucide-react";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import RightSideBar from "../components/RightSideBar";

const MainLayout = () => {
  const DEFAULT_LEFT_SIZE = "25%";
  const leftPanelRef = usePanelRef();
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);

  const toggleLeftSidebar = () => {
    const panel = leftPanelRef.current;
    if (!panel) return;

    if (isLeftCollapsed) {
      panel.expand();
    } else {
      panel.collapse();
    }
  };

  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-full border">
      <ResizablePanel
        panelRef={leftPanelRef}
        collapsible
        collapsedSize="0%"
        defaultSize={DEFAULT_LEFT_SIZE}
        minSize="15%"
        maxSize="30%"
        onResize={(size) => {
          if (size.asPercentage === 0) {
            setIsLeftCollapsed(true);
          } else {
            setIsLeftCollapsed(false);
          }
        }}
      >
        <LeftSideBar
          isCollapsed={isLeftCollapsed}
          onToggleCollapse={toggleLeftSidebar}
        />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize="50%">
        <div className="relative flex h-full items-center justify-center p-6">
          {isLeftCollapsed ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute top-4 left-4"
              onClick={toggleLeftSidebar}
            >
              <PanelLeftOpen className="mr-2 h-4 w-4" />
            </Button>
          ) : null}
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize="25%" minSize="20%" maxSize="40%">
        <RightSideBar />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainLayout;
