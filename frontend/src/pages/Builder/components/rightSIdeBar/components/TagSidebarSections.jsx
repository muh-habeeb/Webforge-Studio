import { useMemo, useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { sidebarSections } from "../data/sidebarSections"

const TagSidebarSections = () => {
  const initialState = useMemo(
    () =>
      Object.fromEntries(
        sidebarSections.map((section, index) => [section.id, index === 0])
      ),
    []
  )
  const [openSections, setOpenSections] = useState(initialState)

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <div className="space-y-2 px-2 pb-2 ">
      {sidebarSections.map((section) => {
        const isOpen = openSections[section.id]

        return (
          <SidebarGroup
            key={section.id}
            className="rounded-md border border-sidebar-border p-2"
          >
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left hover:bg-sidebar-accent"
            >
              <SidebarGroupLabel className="h-auto p-0 text-sm font-semibold text-sidebar-foreground">
                {section.title}
              </SidebarGroupLabel>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-sidebar-foreground/70" />
              ) : (
                <ChevronRight className="h-4 w-4 text-sidebar-foreground/70" />
              )}
            </button>

            {isOpen ? (
              <SidebarGroupContent className="mt-2">
                <div className="grid grid-cols-2 gap-2">
                  {section.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="select-none  rounded-md border border-sidebar-border bg-sidebar px-2 py-1 text-left text-xs font-medium text-sidebar-foreground hover:bg-sidebar-accent"
                    >
                      {`<${tag}>`}
                    </button>
                  ))}
                </div>
              </SidebarGroupContent>
            ) : null}
          </SidebarGroup>
        )
      })}
    </div>
  )
}

export default TagSidebarSections
