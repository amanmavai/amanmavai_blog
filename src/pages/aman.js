import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import "./index.css";

export default function Aman() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="">
      <div className="container mx-auto flex justify-between pt-4">
        <div className="titleWrapper">
          <div className="font-bold text-3xl tracking-tight mb-1">Aman Mavai</div>
          <div className="text-gray-700">
            Lead Engineer at <span className="font-semibold">GS Lab</span>
          </div>
        </div>
        <div className="mb-8 h-20 w-20">
          <img
            alt="Aman Mavai"
            height="{150}"
            width="{150}"
            src="https://avatars.githubusercontent.com/amanmavai"
            className="rounded-full grayscale filter"
          />
        </div>
      </div>
    </Layout>
  );
}
