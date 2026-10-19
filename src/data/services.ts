import {
  BadgeCheck,
  Building2,
  Calculator,
  DoorClosed,
  FileStack,
  GraduationCap,
  Landmark,
  Mailbox,
  Presentation,
  RadioTower,
  Store,
  UserSearch,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

// `key` maps to messages (HrServices.<key> / Spaces.<key>) and to the
// contact form's "need" field, so every CTA can pre-select the right topic.
export type ServiceItem = { key: NeedKey; icon: LucideIcon };

export const hrServices: ServiceItem[] = [
  { key: "recruitment", icon: UserSearch },
  { key: "placement", icon: Users },
  { key: "administration", icon: FileStack },
  { key: "payroll", icon: Wallet },
  { key: "training", icon: GraduationCap },
];

export const spaceServices: ServiceItem[] = [
  { key: "coworking", icon: Building2 },
  { key: "private_office", icon: DoorClosed },
  { key: "domiciliation", icon: Mailbox },
  { key: "room_rental", icon: Presentation },
  { key: "admin_facilitation", icon: BadgeCheck },
  { key: "tax", icon: Calculator },
];

export const audiences = [
  { key: "large", icon: Building2 },
  { key: "sme", icon: Store },
  { key: "banks", icon: Landmark },
  { key: "telecom", icon: RadioTower },
  { key: "graduates", icon: GraduationCap },
] as const;

export const needKeys = [
  "recruitment",
  "placement",
  "administration",
  "payroll",
  "training",
  "coworking",
  "private_office",
  "domiciliation",
  "room_rental",
  "admin_facilitation",
  "tax",
  "visit",
  "application",
  "other",
] as const;

export type NeedKey = (typeof needKeys)[number];

export const contactHref = (need?: NeedKey) =>
  need ? { pathname: "/contact" as const, query: { besoin: need } } : "/contact";
