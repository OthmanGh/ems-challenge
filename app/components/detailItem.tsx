import type { LucideIcon } from "lucide-react";

interface DetailItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subValue?: string;
}

function DetailItem({ icon: Icon, label, value, subValue }: DetailItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-gray-500" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-900">{value}</p>
        {subValue && <p className="text-xs text-gray-500">{subValue}</p>}
      </div>
    </div>
  );
}

export default DetailItem;
