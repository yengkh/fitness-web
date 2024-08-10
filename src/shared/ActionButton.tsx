import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Selected } from "@/shared/types";
type Props = {
  children: React.ReactNode;
  selectedPage: (value: Selected) => void;
};

const ActionButton = ({ children, selectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md px-10 py-2 bg-secondary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
      onClick={() => selectedPage(Selected.ContactUs)}
      href={`#${Selected.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
