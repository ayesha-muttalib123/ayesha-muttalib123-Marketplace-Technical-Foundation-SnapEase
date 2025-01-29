import React from "react";

interface SectionProps {
  title: string;
  breadcrumb: string;
  breadcrumbHighlight: string;
  backgroundColor: string; // Class name for background color
  textColor: string; // Class name for text color
}

const SectionHeader: React.FC<SectionProps> = ({
  title,
  breadcrumb,
  breadcrumbHighlight,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className={`flex flex-col ${backgroundColor} w-full`}>
      <div className={`py-12 px-6 md:px-[8%] text-left`}>
        <h1 className={`text-2xl md:text-4xl font-bold ${textColor}`}>
          {title}
        </h1>
        <p className={`mt-2 text-sm md:text-base ${textColor}`}>
          {breadcrumb} .{" "}
          <span className="text-[#FB2E86]">{breadcrumbHighlight}</span>
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
