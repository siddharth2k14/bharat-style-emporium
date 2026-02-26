import * as React from "react"
import * as SidebarPrimitive from "@react-aria/breadcrumbs"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

const SidebarContext = React.createContext()

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

const SidebarProvider = React.forwardRef(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: onOpenChangeProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const [openState, setOpenState] = React.useState(defaultOpen)
    const open = openProp ?? openState
    const onOpenChange = onOpenChangeProp ?? setOpenState

    const state = open ? "open" : "closed"

    const toggleSidebar = React.useCallback(() => {
      return onOpenChange((open) => !open)
    }, [onOpenChange])

    const value = {
      state,
      open,
      setOpen: onOpenChange,
      toggleSidebar,
      isMobile: false,
      isLoading: false,
    }

    return (
      <SidebarContext.Provider value={value}>
        <div
          style={
            {
              "--sidebar-width": "16rem",
              ...style,
            }
          }
          className={cn(
            "flex min-h-screen w-full has-[[data-variant=inset]]:bg-sidebar",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { state, toggleSidebar, isMobile, open } = useSidebar()

    return (
      <div
        ref={ref}
        data-state={state}
        data-collapsible={collapsible === "offcanvas" ? state : undefined}
        className={cn(
          "group/sidebar-wrapper relative inline-flex h-svh w-[--sidebar-width] flex-col border-r transition-[width,margin] duration-300 ease-in-out has-[[data-collapsible=icon]]:w-[calc(var(--sidebar-width)-3rem)]",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "relative h-svh w-[--sidebar-width] flex-col bg-sidebar p-4 transition-transform duration-300 ease-in-out"
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn("h-9 w-9", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft className="h-4 w-4" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    data-sidebar="rail"
    aria-label="Toggle Sidebar"
    tabIndex={-1}
    className={cn(
      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] after:-translate-x-1/2 hover:after:bg-foreground group-data-[side=left]/sidebar-wrapper:-right-4 group-data-[side=right]/sidebar-wrapper:left-0 sm:flex after:bg-sidebar-border",
      className
    )}
    {...props}
  />
))
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "relative flex w-full flex-col bg-background",
      className
    )}
    {...props}
  />
))
SidebarInset.displayName = "SidebarInset"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-[0.5rem] aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active]:bg-sidebar-accent data-[active]:font-medium data-[active]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]/sidebar-wrapper:h-9 group-data-[collapsible=icon]/sidebar-wrapper:w-9 group-data-[collapsible=icon]/sidebar-wrapper:p-0 [&>span:last-child]:truncate [&>svg+span]:hidden [&>svg]:size-4 [&>svg]:shrink-0"
)

const SidebarMenuButton = React.forwardRef(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          sidebarMenuButtonVariants({ variant }),
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuAction = React.forwardRef(
  ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-action"
        className={cn(
          "absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-md p-1 peer-hover/menu-button:inline-flex",
          "text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2",
          showOnHover && "group-hover/menu-item:inline-flex",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-full p-1 text-xs font-medium",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 w-full items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      <div className="size-4 animate-pulse rounded-md bg-sidebar-accent" />
      <div className="h-2 flex-1 animate-pulse rounded-md bg-sidebar-accent" />
    </div>
  )
)
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef(
  (
    {
      asChild = false,
      size = "md",
      isActive,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "a"

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-sub-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sm outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active]:bg-sidebar-accent data-[active]:text-sidebar-accent-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

const SidebarMenuGroup = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "nav"

    return (
      <Comp
        className={cn("relative", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
SidebarMenuGroup.displayName = "SidebarMenuGroup"

const SidebarMenuGroupAction = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-group-action"
        className={cn(
          "absolute right-1 top-3.5 flex items-center rounded-md p-1.5",
          "text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuGroupAction.displayName = "SidebarMenuGroupAction"

const SidebarMenuGroupLabel = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-group-label"
        className={cn(
          "rounded-md px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuGroupLabel.displayName = "SidebarMenuGroupLabel"

export {
  Sidebar,
  SidebarProvider,
  useSidebar,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuGroup,
  SidebarMenuGroupAction,
  SidebarMenuGroupLabel,
}
