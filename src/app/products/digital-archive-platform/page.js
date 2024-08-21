// src/app/products/page.js

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DigitalProductsPage() {
  return (
    <main className="bg-[#fafafa] overflow-auto mb-[-1px]">
      <div className="my-div mx-auto">
        <div className="w-auto text-[0.89em] no-underline mb-0 mt-4">
          <div className="flex">
            <span>You are here: </span>
            <Link href="/" className="text-[#000000] no-underline">
              Home &nbsp;
            </Link>
            <span>▶ Products</span> &nbsp;
            <span>▶ Digital Archive Platform</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-[80%] float-left pt-5 overflow-hidden mb-7.5">
            <article>
              <div className="flex flex-col lg:block">
                <p className="mt-2">
                  <Image
                    src="/DAP_logo_small_with_shadow.png"
                    width={122}
                    height={127}
                    alt="DAP logo"
                    align="left"
                  />
                  <div className="hidden lg:block ml-[140px]">
                    <p className="mt-2">
                      The <strong> Digital Archive Platform </strong> (DAP)
                      allows research and archival material to be searched and
                      viewed via the web and mobile devices. It is aimed at
                      libraries, universities and museum where information needs
                      to be accessed from different interfaces.
                    </p>
                    <p className="mt-2">
                      The types of data that can be stored and retrieved are:
                    </p>
                    <ul className="ml-5">
                      <li>• PDF</li>
                      <li>• images</li>
                      <li>• Audio</li>
                      <li>• Video</li>
                      <li>• HTML</li>
                      <li>• Flash</li>
                      <li>• Web URLs</li>
                    </ul>
                  </div>
                </p>
                <div>
                  <div className="lg:hidden">
                    <p className="mt-2">
                      The <strong> Digital Archive Platform </strong> (DAP)
                      allows research and archival material to be searched and
                      viewed via the web and mobile devices. It is aimed at
                      libraries, universities and museum where information needs
                      to be accessed from different interfaces.
                    </p>
                    <p className="mt-2">
                      The types of data that can be stored and retrieved are:
                    </p>
                    <ul className="ml-5">
                      <li>• PDF</li>
                      <li>• images</li>
                      <li>• Audio</li>
                      <li>• Video</li>
                      <li>• HTML</li>
                      <li>• Flash</li>
                      <li>• Web URLs</li>
                    </ul>
                  </div>
                  <p className="mt-2">
                    The Digital Archive Platform can run stand-alone in a hosted
                    environment or be integrated into an existing website. The
                    mobile applications are available for iOS & Android devices,
                    allowing research material to be accessed at anytime,
                    anywhere.
                  </p>
                  <p className="mt-2">
                    Here is an example of the Digital Archive Platform, which
                    can be viewed at{" "}
                    <Link
                      title="Royal Marines Badges"
                      href="http://www.rm-badges.com"
                    >
                      <a target="_blank" className="text-[#90c140] underline">
                        www.rm-badges.com
                      </a>
                    </Link>
                  </p>
                  <p className="mt-2">
                    <Image
                      title="Screenshot"
                      alt="Screenshot"
                      src="/screenshot_final-small.png"
                      width={600}
                      height={458}
                    />
                  </p>
                  <p className="mt-2">
                    Here is an example of a Digital Archive Platform branded
                    mobile application:
                  </p>
                  <p className="mt-2">
                    <Image
                      title="Digital Archive Platform Mobile Application"
                      alt="Digital Archive Platform Mobile Application"
                      src="/Composite.png"
                      width={600}
                      height={392}
                    ></Image>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="w-[20%] m-0 p-0 mt-5 mb-7.5 ml-[26px] float-right leading-[1.7em] min-w-[150px]">
            <div className="overflow-hidden mb-4">
              <h3 className="font-sans font-normal text-[#000000] text-[18px] leading-[1.15em] mb-1.5">
                Associated Services
              </h3>
              <div>
                <p>
                  Tynesoft offers a full-service, hosted version of the DAP
                  where we deal with the storage of your documents in a backed
                  up, fully secure and highly accessible environment, utilizing
                  significant bandwidth to reduce latency. Associated services:
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Content Setup and Maintenance
                  </span>
                  – Tools to allow documents to be continually added and updated
                  on the DAP.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Web Site Maintenance
                  </span>{" "}
                  – Tools to allow different versions of the site to be
                  launched.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Branding
                  </span>{" "}
                  – A service to allow your logo and colours to be added to the
                  web site and mobile applications.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Framework for web content
                  </span>{" "}
                  – So that web site content changes can be performed easily.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Document compression
                  </span>{" "}
                  – Tools are provided to allow documents to be compressed to
                  reduce download time.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Web analytics
                  </span>{" "}
                  – Ability to view the website analytics which show how long a
                  user spent on the website, how many visitors per day have
                  visited the site and where the visitors are located.
                </p>
                <p>
                  <span className="text-[#90c140] font-bold bg-transparent p-0">
                    Mobile application download site
                  </span>{" "}
                  – Specific website where a customer can download the iOS and
                  Android mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
          <li className="float-right">
            <Link
              className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
              href="/products/appfu"
            >
              {"Next > "}
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
