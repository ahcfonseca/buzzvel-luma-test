import { cn } from "@/lib/utils";

export type StatBadgeProps = {
  value: string | number;
  label: string;
  className?: string;
};

export function StatBadge({ value, label, className }: StatBadgeProps) {
  return <div className={cn("stat-badge", className)}>
    <span className="flex h-8 shrink-0 items-center rounded-control bg-primary-blue-light px-1 font-bold text-primary-blue">{value}</span>
    <span className="min-w-0">{label}</span>
  </div>;
}
