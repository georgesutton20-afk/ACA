// Central navigation config shared by the sidebar and mobile nav.
import {
  LayoutDashboard,
  Map,
  Dumbbell,
  ScrollText,
  BarChart3,
  Trophy,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  admin?: boolean;
}

export const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learn", label: "Learn", icon: Map },
  { href: "/practice", label: "Practice", icon: Dumbbell },
  { href: "/mock", label: "Mock exams", icon: ScrollText },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/gamification", label: "Achievements", icon: Trophy },
  { href: "/admin", label: "Admin", icon: Shield, admin: true },
  { href: "/settings", label: "Settings", icon: Settings },
];
