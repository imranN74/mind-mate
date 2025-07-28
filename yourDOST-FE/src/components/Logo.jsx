import { BrainCog } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
        <BrainCog className="w-7 h-7 text-white" />
      </div>

      {/* Text */}
      <div className="font-extrabold text-4xl tracking-tight">
        <span className="text-purple-600">Mind</span>
        <span className="text-slate-800">Mate</span>
      </div>
    </div>
  );
}
