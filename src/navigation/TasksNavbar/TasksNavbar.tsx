import { Notebook, NotepadText } from "lucide-react";

interface TasksNavbarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  categoryCompletion: Record<string, boolean>;
  showScript: boolean;
  toggleShowScript: () => void;
  showCheatSheet: boolean;
  toggleShowCheatSheet: () => void;
}

const TasksNavbar = ({
  categories,
  selectedCategory,
  onCategorySelect,
  categoryCompletion,
  showScript,
  toggleShowScript,
}: TasksNavbarProps) => {
  const baseButtonClasses =
    "flex gap-2 items-center px-4 whitespace-nowrap py-1 rounded-md transition-colors duration-200 ease-in-out cursor-pointer";
  return (
    <div className="px-4 py-3 bg-violet-900 flex items-center justify-between overflow-x-auto">
      <div className="flex space-x-3">
        {categories.map((category) => {
          const isDone = categoryCompletion[category];
          const isSelected = category === selectedCategory;
          let categoryClasses;
          if (isSelected && !isDone) {
            categoryClasses = "bg-white text-indigo-600 hover:cursor-default";
          } else if (isDone) {
            categoryClasses =
              "border-green-500 text-green-900 opacity-50 bg-green-300 line-through";
          } else {
            categoryClasses = "bg-indigo-300 text-violet-900 hover:bg-indigo-100";
          }
          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`${baseButtonClasses} ${categoryClasses}`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2 ml-2">
        <button
          onClick={toggleShowScript}
          className={`${baseButtonClasses} ${showScript ? "bg-white text-indigo-600 hover:bg-violet-200" : "bg-violet-500 text-white hover:bg-violet-400"}`}
        >
          <NotepadText className="size-4" />
          {showScript ? "Ukryj notatki" : "Pokaż notatki"}
        </button>
      </div>
    </div>
  );
};

export default TasksNavbar;
