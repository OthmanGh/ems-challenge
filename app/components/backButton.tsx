import { useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";

const BackButton = ({ label }: { label: string }) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center gap-3 hover:underline text-[18px] text-[#333] font-semibold hover:text-[#666] cursor-pointer transition-all duration-500 sm:mb-8 mb-4"
      onClick={() => navigate(-1)}
    >
      <MoveLeft className="w-6 h-6" />
      <span>{label}</span>
    </button>
  );
};
export default BackButton;
