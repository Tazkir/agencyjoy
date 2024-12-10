import { TypingAnimation } from "@/components/MagicUi/typingAnimation";

export default function CustomProject() {
  return (
    <div className="relative overflow-hidden w-full h-[11.5em] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
      <div className="w-full h-full flex">
        {/* Line numbers */}
        <div className="flex-[0.7] flex flex-col justify-center items-end w-full mr-2 md:mr-4 text-neutral-600 font-mono text-sm bg-gradient-to-r from-[#050505] to-[#141414]">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="leading-5 w-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-[3] w-full font-mono text-sm flex flex-col justify-center items-start">
          <pre className="text-neutral-200 w-full text-start">
            <span className="text-orange-500">Class</span>{" "}
            <span className="text-neutral-200">ChatBot</span>
            {" {"}
            <br />
            {"  "}
            <span className="text-neutral-400">address</span>{" "}
            <span className="text-neutral-400">public</span>{" "}
            <span className="text-neutral-400">owner</span>;
            <br />
            {"  "}
            <span className="text-neutral-400">int</span>{" "}
            <span className="text-neutral-400">private</span>{" "}
            <span className="text-neutral-400">response</span>;
            <br />
            {"  "}
            <span className="text-orange-500">constructor</span>(){"{"}
            <br />
            {"    "}owner = msg.sender;
            <br />
            {"  }"}
            <br />
            {"  "}
            <span className="text-orange-500">function</span>{" "}
            <TypingAnimation
              className="text-neutral-400"
              text="response(){"
              duration={200}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}
