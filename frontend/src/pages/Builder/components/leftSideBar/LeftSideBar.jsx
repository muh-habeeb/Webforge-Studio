import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Layout from "./layout/Layout";

const LeftSideBar = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarHeader /> 
        <SidebarContent>
          <SidebarGroup />

          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </Layout>
  );
};

export default LeftSideBar;
