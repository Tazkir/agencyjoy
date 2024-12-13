"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { DescriptionText } from "../../CustomUI/Typography/text";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";

const terms = [
  {
    title: "1. Overview",
    desc: "AgencyJoy our is an innovative agency amplified with AI, offering a range of creative and digital services. These Terms apply to all visitors, users, and others who access or use our services.",
  },

  {
    title: "2. Services",
    desc: "We provide a variety of services, including but not limited to branding, web development, digital marketing, and AI-driven solutions. Each service is subject to its own specific agreement, which outlines the scope, timeline, and payment terms.",
  },
  {
    title: "3. User Responsibilities",
    desc: "As a user of AgencyJoy, you agree to: /n Provide accurate and up-to-date information when required. Use our services only for lawful purposes and in a manner that does not infringe the rights of others. Maintain the confidentiality of your account information and be responsible for all activities under your account.",
  },
  {
    title: "4. Intellectual Property",
    desc: "All content, designs, graphics, logos, and software used on this website are the property of AgencyJoy or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our express permission.",
  },
  {
    title: "5. Payments",
    desc: "Fees for our services are agreed upon in advance and will be outlined in a service agreement. Payment is due upon receipt of the invoice unless otherwise specified. Late payments may incur interest at a rate of 1.5% per month.",
  },
  {
    title: "6. Confidentiality",
    desc: "We take your privacy and confidentiality seriously. Any business or personal information shared with AgencyJoy will be kept confidential and will not be disclosed to third parties without your consent, except as required by law.",
  },
  {
    title: "7. Termination",
    desc: "Either party may terminate a service agreement by providing written notice. If you terminate the agreement, you will be responsible for any costs incurred up to the date of termination. AgencyJoy reserves the right to terminate your access to our services if you violate these Terms.",
  },
  {
    title: "8. Limitation of Liability",
    desc: "AgencyJoy is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability will not exceed the amount paid by you for the services provided.",
  },
  {
    title: "9. Governing Law",
    desc: "These Terms are governed by the laws of James Hopkins. Any disputes arising from these Terms will be resolved in the courts of James Hopkins.",
  },
  {
    title: "10. Changes to Terms",
    desc: "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms.",
  },
  {
    title: "11. Contact Information",
    desc: "If you have any questions or concerns about these Terms, please contact us at customer@agencyjoy.com.",
  },
];

export default function Term() {
  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start items-center gap-[90px] pt-[230px]"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.1 }}>
          <h1 className="text-clamp-hero font-medium">Term & Conditions</h1>
        </AnimatedDiv>

        <AnimatedDiv
          viewportOptions={{ amount: 0.3, delay: 0.3 }}
          className="w-[96%] lg:w-[60%]"
        >
          <DescriptionText title="Welcome to AgencyJoy! These terms and conditions outline the rules and regulations for the use of our website and services." />
        </AnimatedDiv>
      </div>

      <div className="w-[90%] lg:w-[50%] flex flex-col justify-center items-start text-left gap-5">
        {terms.map((term, i) => (
          <AnimatedDiv
            viewportOptions={{ amount: 0.4, delay: 0.4 }}
            key={i}
            className="flex flex-col justify-center items-start text-left gap-5"
          >
            <h1 className="font-medium text-[18px] md:text-[20px] lg:text-[24px]">
              {term.title}
            </h1>
            <p className="font-manrope font-normal text-[#AFAFAF] text-[16px] lg:text-[18px]">
              {term.desc}
            </p>
          </AnimatedDiv>
        ))}
      </div>

      <AnimatedDiv
        viewportOptions={{ amount: 0.5, delay: 0.5 }}
        className="w-[90%] lg:w-[50%] flex justify-center items-start text-left pb-5"
      >
        <p className="font-manrope font-normal text-[#AFAFAF] text-[16px] lg:text-[18px]">
          By using AgencyJoy’s services, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </p>
      </AnimatedDiv>
    </div>
  );
}
