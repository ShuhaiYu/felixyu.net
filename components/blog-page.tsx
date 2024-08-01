/* eslint-disable prettier/prettier */
"use client"

import { Button } from "@nextui-org/button";

import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const BlogPage = ({ html }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link className="self-center" href="/blog">
        <Button
          isIconOnly
          className="dark:border-knight dark:bg-transparent dark:border-2 bg-[#ece7e7] border-0"
          radius="full"
          variant="bordered"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <RxCross2 />
        </Button>
      </Link>
      <div
        className={`transition duration-700 ease-in-out transform ${hover ? "translate-y-5" : ""}`}
      >
        <div className="prose items-center justify-center mx-auto" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </>
  );
};

export default BlogPage;
