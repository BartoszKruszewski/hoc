import { useState } from "react";
import { usePyodide } from "../../hooks/usePyodide";
import CodeEditor from "./CodeEditor/CodeEditor";
import OutputPanel from "./OutputPanel/OutputPanel";
import { Play } from "lucide-react";

const Playground = () => {
  const { run, loading } = usePyodide();
  const [code, setCode] = useState<string>('print("Hello, world!")');
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    setOutput(await run(code));
  };

  return (
    <div className="space-y-4 items-center p-4 bg-slate-50 rounded-xl h-full overflow-auto">
      {loading ? (
        <div>Ładowanie edytora...</div>
      ) : (
        <>
          <CodeEditor code={code} onChange={setCode} />
          <button
            className="flex items-center gap-4 py-5 rounded bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer
                       w-full justify-center duration-300 ease-in-out text-2xl font-semibold"
            onClick={handleRun}
          >
            Uruchom <Play className="size-8" />
          </button>
          <div>
            <p className="font-bold text-indigo-500">WYJŚCIE PROGRAMU</p>
            <OutputPanel output={output} />
          </div>
        </>
      )}
    </div>
  );
};

export default Playground;
