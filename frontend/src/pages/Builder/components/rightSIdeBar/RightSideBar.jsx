import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Layout from "./layout/Layout";
import TagSidebarSections from "./components/TagSidebarSections";

const RightSideBar = ({ isCollapsed, onToggleCollapse }) => {
  return (
    <Layout>
      <Sidebar
        collapsible="none"
        variant="sidebar"
        side="left"
        className="h-full w-full"
      >
        <SidebarHeader className="border-b border-sidebar-border p-3 mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Tags</h2>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="ml-auto h-7 w-7 cursor-pointer"
              onClick={onToggleCollapse}
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <PanelRightOpen className="h-4 w-4" />
              ) : (
                <PanelRightClose className="h-4 w-4" />
              )}
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <TagSidebarSections />
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-2 text-xs text-sidebar-foreground/70">
          other items
        </SidebarFooter>
      </Sidebar>
    </Layout>
  );
};

export default RightSideBar;