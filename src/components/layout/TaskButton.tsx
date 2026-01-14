import { Plus } from "lucide-react";

const NewTaskButton = () => {
    return (
        <button className=" flex justify-center items-center w-[80%] mx-auto mb-3 gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors z-30 bg-yellow-400 hover:bg-yellow-300 text-black">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">New Task</span>
        </button>
    );
};
export default NewTaskButton;