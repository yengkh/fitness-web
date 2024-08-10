import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Selected } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selected: Selected;
  setSelectedPage: (value: Selected) => void;
  isTopOfThePage: boolean;
};

const NavBar = ({ isTopOfThePage, selected, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
  const navBarBackground = isTopOfThePage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBarBackground}  ${flexBetween} fixed py-6 top-0 z-30 w-full`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEST SIDE */}
            <img src={Logo} alt="Website logo" />
            {/* RIGHT SIDE */}
            {isAboveMediaScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-small`}>
                  <Link
                    page="Home"
                    isSelected={selected}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benifits"
                    isSelected={selected}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    isSelected={selected}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    isSelected={selected}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton selectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => setMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediaScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button
              type="button"
              onClick={() => setMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              isSelected={selected}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Benifits"
              isSelected={selected}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              isSelected={selected}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact Us"
              isSelected={selected}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
