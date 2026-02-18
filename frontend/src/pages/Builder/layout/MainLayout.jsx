import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RightSideBar from "../components/RightSideBar";

const MainLayout = () => {
  return (
    <>
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-full  border "
      >
        <ResizablePanel
          defaultSize="25%"
          minSize="20%"
          maxSize="25%"
          className="max-w-[30%]"
        >
          <LeftSideBar />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize="75%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel
          defaultSize="25%"
          minSize="20%"
          maxSize="25%"
          className="max-w-[30%]"
        >
          <RightSideBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default MainLayout;
