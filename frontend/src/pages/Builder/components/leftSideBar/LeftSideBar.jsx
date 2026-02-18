import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Layout from "./layout/Layout";
import TagSidebarSections from "./components/TagSidebarSections";

const LeftSideBar = ({ isCollapsed, onToggleCollapse }) => {
  return (
    <Layout >
      <Sidebar
        collapsible="none"
        variant="sidebar"
        side="left"
        className="h-full w-full bg-stone-100 "
      >
        <SidebarHeader className="border-b border-sidebar-border p-3 mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Components</h2>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="ml-auto h-7 w-7"
              onClick={onToggleCollapse}
              title={"Collapse sidebar"}
            >
              {isCollapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>

          {/* componets are defined below comonent */}
          <TagSidebarSections /> 

        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-2 text-xs text-sidebar-foreground/70">
          other items
        </SidebarFooter>
      </Sidebar>
    </Layout>
  );
};

export default LeftSideBar;
