import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="mailto:robertocostantino3@gmail.com">
              Email
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
