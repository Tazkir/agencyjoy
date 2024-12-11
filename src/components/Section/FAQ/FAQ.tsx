import AccordionFaq from "@/components/CustomUI/Accordion/accordionFaq";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { TitleText } from "@/components/CustomUI/Typography/text";

const faqs = [
  {
    title: "What makes AgencyJoy different from other agencies?",
    content:
      "At AgencyJoy, we combine AI and creative design to deliver standout, innovative solutions that exceed expectations.",
  },
  {
    title: "How does AI enhance the services provided by AgencyJoy?",
    content:
      "At AgencyJoy, we combine AI and creative design to deliver standout, innovative solutions that exceed expectations.",
  },
  {
    title: "How does AgencyJoy ensure the quality of its AI solutions?",
    content:
      "At AgencyJoy, we combine AI and creative design to deliver standout, innovative solutions that exceed expectations.",
  },
  {
    title: "Does AgencyJoy offer customized solutions?",
    content:
      "At AgencyJoy, we combine AI and creative design to deliver standout, innovative solutions that exceed expectations.",
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="w-full relative flex flex-col justify-center items-center gap-14 py-14"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <SectionBadge title="Need to Know" />

        <TitleText title="Frequently Asked Questions" />
      </div>

      <div className="w-[90%] xl:w-2/4 flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <AccordionFaq title={faq.title} key={index}>
            <p className="font-manrope font-normal text-[#919191] text-[19px]">
              {faq.content}
            </p>
          </AccordionFaq>
        ))}
      </div>
    </div>
  );
}
