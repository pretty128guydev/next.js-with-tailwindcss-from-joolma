// src/app/products/page.js

import Link from "next/link";
import React from "react";

export default function Servicespage() {
  return (
    <main className="my-div bg-[#fafafa] overflow-auto mb-[-1px]">
      <div className="w-auto text-[0.89em] no-underline mb-0 mt-4">
        <div>
          <span>You are here: </span>
          <Link href="/" className="text-[#000000] no-underline"></Link>► &nbsp;
          <Link href="" className="text-[#000000] no-underline">
            Services
          </Link>
        </div>
      </div>
      <div className="mt-1 flex flex-col md:flex-row">
        <div className="w-[20%] min-w-[230px]">
          <div className="w-[196px] m-0 mt-5 mb-7.5 mr-[26px] float-left leading-[1.7em]">
            <div className="overflow-hidden mb-4">
              <h3 className="font-sans font-normal text-[#000000] text-[18px] leading-[1.15em] mb-[6px]">
                Related Articles
              </h3>
              <ul className="pl-0 list-none ml-0 mt-3 mb-5">
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <Link
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="//services/8-articles/6-alternatives-to-the-app-stores"
                  >
                    Alternatives to the app stores{" "}
                  </Link>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <Link
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="//services/8-articles/7-how-do-you-develop-a-mobile-application"
                  >
                    How do you develop a mobile application?{" "}
                  </Link>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <Link
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="//services/8-articles/8-why-take-your-product-mobile"
                  >
                    Why take your product mobile?{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[80%] pt-6">
          <article>
            <p className="mt-3">
              Tynesoft offers services centered around the intersection of
              enterprise/web and mobile applications:
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Mobile User Interface design
              </span>{" "}
              - ensuring you have a consistent, yet device-appropriate, user
              experience on different mobile platforms (iOS v. Android) and
              device types (phones v. tablets). Special attention is given to
              bringing design elements of the enterprise application (familiar
              to your users ) to the mobile application.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Technology selection
              </span>{" "}
              - help deciding between native applications and mobile-optimized
              webapps.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Mobile application development
              </span>{" "}
              - using native platform development tools or webapp frameworks,
              utilizing multiple media channels (data, voice, messaging, video,
              etc). Tynesoft specializes in designing communications protocols
              between mobile applications and enterprise applications (e.g. web
              services, REST, html, etc). All mobile applications we development
              are designed with extensibility in mind so that future
              functionality can be added easily.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Enterprise application development
              </span>{" "}
              - especially enhancing enterprise applications with new APIs to
              allow seamless integration between the enterprise and mobile
              applications.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Branding
              </span>{" "}
              - developing white-labelled (branded) solutions to deliver the
              same mobile applications to different customers.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">QA</span> -
              providing both functional and boundary testing (low power and
              signal strength) with the relevant device and tablets.
            </p>
            <p className="mt-3">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Publishing
              </span>{" "}
              - releasing and managing your application on the various
              application stores.
            </p>
            <p className="mt-3">
              Tynesoft uses an iterative development methodology, providing the
              customer with wire-frames, a pixel-perfect specification and an
              early release of the application in an early form so customers can
              iterate through the functionality to ensure we develop exactly the
              mobile application envisaged.
            </p>
          </article>
          <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
            <li className="float-right">
              <Link
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/products/appfu"
                rel="next"
              >
                {"Next > "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
