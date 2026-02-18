import { useState } from "react";
import { usePanelRef } from "react-resizable-panels";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import RightSideBar from "../components/rightSIdeBar/RightSideBar";

const MainLayout = () => {
  const DEFAULT_SIZE = "15%"; // default width of the left panel
  const SIDEBAR_MAX_SIZE = "30%"; // default width of the left panel

  // refs to imperatively control each panel
  const leftPanelRef = usePanelRef();
  const rightPanelRef = usePanelRef();

  // track collapsed state for each sidebar
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  // toggle left sidebar open/closed
  const toggleLeftSidebar = () => {
    const panel = leftPanelRef.current;
    if (!panel) return;
    if (isLeftCollapsed) {
      panel.expand();
    } else {
      panel.collapse();
    }
  };

  // toggle right sidebar open/closed
  const toggleRightSidebar = () => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    if (isRightCollapsed) {
      panel.expand();
    } else {
      panel.collapse();
    }
  };

  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-full border">
      {/* Left sidebar panel */}
      <ResizablePanel
        panelRef={leftPanelRef}
        collapsible
        collapsedSize="0%"
        defaultSize={DEFAULT_SIZE}
        minSize="15%"
        maxSize={SIDEBAR_MAX_SIZE}
        onResize={(size) => {
          // sync collapsed state when dragged to zero
          setIsLeftCollapsed(size.asPercentage === 0);
        }}
      >
        <LeftSideBar
          isCollapsed={isLeftCollapsed}
          onToggleCollapse={toggleLeftSidebar}
        />
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Main content area */}
      <ResizablePanel defaultSize="50%">
        <div className="relative flex h-full items-center justify-center p-6">
          {/* Show open button when left sidebar is collapsed */}
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
          {/* Show open button when right sidebar is collapsed */}
          {isRightCollapsed ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={toggleRightSidebar}
            >
              <PanelRightOpen className="mr-2 h-4 w-4" />
            </Button>
          ) : null}
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle /> {/* Handle between main content and right sidebar */}

      {/* Right sidebar panel */}
      <ResizablePanel
        panelRef={rightPanelRef}
        collapsible
        collapsedSize="0%"
        defaultSize={DEFAULT_SIZE}
        minSize="15%"
        maxSize={SIDEBAR_MAX_SIZE}
        onResize={(size) => {
          // sync collapsed state when dragged to zero
          setIsRightCollapsed(size.asPercentage === 0);
        }}
      >
        <RightSideBar
          isCollapsed={isRightCollapsed}
          onToggleCollapse={toggleRightSidebar}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainLayout;
