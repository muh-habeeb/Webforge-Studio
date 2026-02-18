import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="h-full"
      style={{
        // Make sidebar fill its resizable parent panel width.
        "--sidebar-width": "100%",
        "--sidebar-width-mobile": "18rem",
      }}
    >
      {children}
    </SidebarProvider>
  );
}
