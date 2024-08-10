import { Selected } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  isSelected: Selected;
  setSelectedPage: (value: Selected) => void;
};

const Link = ({ page, isSelected, setSelectedPage }: Props) => {
  const pageLowerCase = page.toLowerCase().replace(/ /g, "") as Selected;
  return (
    <AnchorLink
      className={`${isSelected === pageLowerCase ? "text-primary-500 hover:text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(pageLowerCase)}
      href={`#${pageLowerCase}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
