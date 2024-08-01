/* eslint-disable prettier/prettier */
"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const BlogList = ({ posts }: any) => {

  return (
    <div className="px-4 pb-10">
      <div className="flex flex-col items-center mb-4 gap-2">
        <Link href="/">
          <Button
            isIconOnly
            className="dark:border-knight dark:bg-transparent dark:border-2 bg-[#ece7e7] border-0"
            radius="full"
            variant="bordered"
          >
            <RxCross2 />
          </Button>
        </Link>
        <h1 className="text-2xl font-[500]">My Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.results.map((post: any) => (
          <Link
            key={post.id}
            href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
          >
            <Card className="dark:bg-darkBg dark:border-2 dark:border-knight rounded-[2rem]">
              <CardBody className="p-0">
                <Image
                  src={post.cover.external.url}
                  alt="cover"
                  className="rounded-b-none object-cover h-[200px]"
                  height={500}
                  width={500}
                />
              </CardBody>
              <CardFooter className="flex justify-between">
                <h3 className="text-lg font-[500] line-clamp-1">
                  {post.properties.Name.title[0].plain_text}
                </h3>
                <h3 className="text-sm">
                  {new Date(post.created_time).toDateString()}
                </h3>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
