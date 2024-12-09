import Accordion from "@/components/CustomUI/Accordion/accordion";

type AccordionListProps = {
  openIndex: number;
  handleToggle: (index: number) => void;
};

export default function AccordionList({
  openIndex,
  handleToggle,
}: AccordionListProps) {
  return (
    <>
      <Accordion
        title="Grapho AI"
        titleLeft="47% increase in new customers."
        desc="That’s Why We Leverage AI to Create Impactful, Lasting
                Experiences that Engage, and Transform Every Interaction."
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      />

      <Accordion
        title="VectraOps"
        titleLeft="34% increase in online sales."
        desc="That’s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction."
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      />

      <Accordion
        title="Signum"
        titleLeft="47% increase in new customers."
        desc="That’s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction."
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      />
    </>
  );
}
