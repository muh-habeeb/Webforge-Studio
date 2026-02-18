import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Builder = () => {
  return (
    <>
      <aside className="h-screen  bg-red-500 ">
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-full min-w-[calc(100% - 20px)]  border "
        >
          <ResizablePanel defaultSize="25%" >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </aside>
    </>
  );
};

export default Builder;
