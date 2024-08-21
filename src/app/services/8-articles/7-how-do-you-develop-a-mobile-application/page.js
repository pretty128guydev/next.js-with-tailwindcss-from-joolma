// src/app/products/page.js

import React from "react";

export default function Servicespage() {
  return (
    <main className="my-div bg-[#fafafa] overflow-auto mb-[-1px]">
      <div className="w-auto text-[0.89em] no-underline mb-0 mt-4">
        <div>
          <span>You are here: </span>
          <a href="/" className="text-[#000000] no-underline"></a>► &nbsp;
          <a href="" className="text-[#000000] no-underline">
            Services &nbsp;
          </a>
          ► &nbsp;
          <a href="" className="text-[#000000] no-underline">
            Articles &nbsp;
          </a>
          ► &nbsp;
          <a href="" className="text-[#000000] no-underline">
            How do you develop a mobile application?
          </a>
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
                  <a
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="/services/8-articles/6-alternatives-to-the-app-stores"
                  >
                    Alternatives to the app stores{" "}
                  </a>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <a
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="/services/8-articles/7-how-do-you-develop-a-mobile-application"
                  >
                    How do you develop a mobile application?{" "}
                  </a>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <a
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="/services/8-articles/8-why-take-your-product-mobile"
                  >
                    Why take your product mobile?{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[80%] pt-6">
          <article class="item-page">
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Use your existing development team
              </span>
              . You probably already have developers who would be interested in
              giving mobile development a try. I would argue that unless there
              is a compelling reason to let them try a new development paradigm
              (e.g. you would lose them if you didn’t and their domain expertise
              is invaluable), keep them where they are – that’s why you hired
              them. My experience has been that first-time-mobile developers
              generally do not make a excellent job of their first application.
              The only exception to that would be very experienced developers
              backed up by a very strong (in mobile) UI design team.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Build a mobile development team
              </span>{" "}
              - the most effective but expensive option. It will take time to
              find the right people, but once you have them you’re in a position
              to rapidly iterate and have the advantage of the mobile team
              working closely with the rest of the organization. You need
              absolute commitment to go this path as you’re going to be
              investing in people, office space, equipment, etc.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Outsourced project
              </span>{" "}
              – Outsourcing on a project basis is tempting, especially as it
              minimizes cost risk. However, it gives you little room for
              maneuver as you begin to feel what the application is like to
              actually use and leaves the very awkward question of who supports
              the app, adds new features, preemptively tests and fixes for new
              versions of operating systems, devices, etc. I see this as a
              short-sighted approach. If you’re going mobile, do it properly.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Staff augmentation
              </span>{" "}
              – The advantage here is that you can get rapid access to
              experienced mobile developers who are ready to go with their
              development environments, devices, etc. You have flexibility to
              start small and grow, or even do the reverse and have a
              high-effort initial push and then fall back into a maintenance
              mode. Some outsourced vendors will even work on a fractional basis
              for maintenance and support work.
            </p>
          </article>
          <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
            <li className="float-right">
              <a
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/services/8-articles/8-why-take-your-product-mobile"
                rel="next"
              >
                {"Next > "}
              </a>
            </li>
            <li className="float-left">
              <a
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/services/8-articles/6-alternatives-to-the-app-stores"
                rel="next"
              >
                {" < Prev"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
