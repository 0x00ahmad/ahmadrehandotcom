import React from "react";
import Title from "./title";
import Image from "next/image";
import { Button } from "../ui/button";

function SectionTitle({ title, cta }: { title: string; cta?: string }) {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <Image
          src={"/assets/signature.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className={"w-auto h-8"}
        />
        <Title color="primary" title={title} size="h2" />
      </div>
      {cta && <Button variant={"muted"}>{cta}</Button>}
    </div>
  );
}

export default SectionTitle;
