import React from "react";
import AnimatedBlocks from "./AnimatesBlocks";
import Blocks from "./Blocks";
import { Facebook, Github, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {

  const yourEmail = "botchaindravathi248@gmail.com"; // Replace with your email
  const subject = "Let's Connect!";
  const body = "Hi, I'd like to get in touch with you.";

  const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div
    id="Contact"
     className="relative overflow-hidden bg-violet-100 width-[100vw] text-slate-900 py-10 px-10 md:px-30 min-h-auto">
      {/* upper */}
      <div className="flex justify-between">
        {/* Upper Left */}
        <div>
          <h1 className="text-md font-regular text-slate-950">
            What’s your next big idea?✨
            <br />
            Let’s build it together!!!🚀{" "}
          </h1>

          <button className="my-4 bg-slate-950 py-3 px-4 rounded-lg text-slate-50 text-md font-semibold">
          <a href={mailtoLink} className="">
            Let's Connect!!
          </a>
          </button>
          <ul className="text-slate-950 my-4 flex gap-4">
            <li>
              <a href="https://www.linkedin.com/in/botchaindravathi/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Indhu248/">
                <Github />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/indhu_hehhehe/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/botcha.indhu.1/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://x.com/BotchaIndhu">
                <X />
              </a>
            </li>

          </ul>
          <h3 className="text-slate-600 text-sm mt-14">
          ©2025 indravathi All rights reserved
        </h3>
        </div>
        {/* Upper Right */}
        <div className="opacity-80 hidden md:flex h-[20vh]">
          <Blocks />
        </div>
      </div>
      {/* lower */}
      <div>
      </div>
    </div>
  );
};

export default Footer;
