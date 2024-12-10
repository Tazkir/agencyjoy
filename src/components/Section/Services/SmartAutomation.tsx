import Image from "next/image";
import one from "../../../../public/images/2.avif";
import settings from "../../../../public/smart/settings.png";
import email from "../../../../public/smart/email.png";
import messages from "../../../../public/smart/messages.png";
import SmartAutomationButton from "@/components/CustomUI/Button/SmartAutomationButton";

export default function SmartAutomation() {
  return (
    <div className="relative overflow-hidden w-full h-[11.5em] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
      <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
        <SmartAutomationButton
          title="Trigger"
          image={settings}
          animationDelay="5s"
        />
        <div className="border-2 border-l h-2" />
        <SmartAutomationButton
          title="Prompts"
          image={messages}
          animationDelay="10s"
        />
        <div className="border-2 border-l h-2" />
        <SmartAutomationButton
          title="Send Email"
          image={email}
          animationDelay="15s"
        />
      </div>

      <div className="absolute w-full h-full inset-0">
        <Image
          src={one}
          width={1000}
          height={1000}
          alt=""
          className="object-fill w-full h-full"
        />
      </div>
    </div>
  );
}
