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
            Why take your product mobile?
          </a>
        </div>
      </div>
      <div className="mt-1 flex">
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
                    href="//services/8-articles/6-alternatives-to-the-app-stores"
                  >
                    Alternatives to the app stores{" "}
                  </a>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <a
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="//services/8-articles/7-how-do-you-develop-a-mobile-application"
                  >
                    How do you develop a mobile application?{" "}
                  </a>
                </li>
                <li className="border-b border-[#e2e2e2] py-[2px] pl-2 list-none">
                  <a
                    className="text-[#000000] font-sans font-semibold text-[14px] leading-[20px] hover:text-[#90c140]"
                    href="//services/8-articles/8-why-take-your-product-mobile"
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
          <article>
            <p className="mt-2">
              This comparison assumes you have an existing web application and
              clearly doesn’t apply to immersive applications (such as games)
              and those which leverage mobile-specific features such as
              location, the camera, the phone itself, etc.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                An advertisement for your brand
              </span>{" "}
              - Building a mobile app gives you several application stores on
              which to promote yourself. While it can be difficult to rise above
              the crowd but if you have something unique you are in a better
              position. The simple idea here is to offer a discrete piece of
              functionality for free to drive reviews/downloads and guide people
              towards your website to register and become paying customers.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Pull in new customers
              </span>{" "}
              - Similar to above, but there needs to be a stronger hook to pull
              in registrations and ultimately conversion to a paying customer,
              such as the offer of more details, extra features, new levels,
              etc. These extra features can be on your website or in the
              application itself. The model of offering a ‘lite’ version for
              free then using a full version with all of the extra functionality
              is very common. More recently applications are moving to in-app
              purchases to streamline this conversion process.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Bigger feature set
              </span>{" "}
              - The above two models are all about using the mobile apps to gain
              customers and work largely (but not necessarily exclusively) on
              the assumption that the first time users see your application is
              the mobile app.
            </p>
            <p className="mt-2">
              In contrast, this approach is less about gaining users, more about
              giving existing (web) users the option of a full-featured mobile
              experience. Typically this approach starts with a login
              (optionally the chance to register) and then launches into the
              full application functionality. The idea is to simply give your
              users more options on how/when/where to engage with you.
            </p>
            <p className="mt-2">
              <span className="text-[#90c140] font-bold bg-none p-0">
                Monetization
              </span>{" "}
              - There are two keys features (apart from the obvious that having
              a mobile option drives customer acquisition):
            </p>
            <ul className="pl-5">
              <li>
                • Paid apps. Don’t forget to budget for the AppStore providers
                taking their share, and don’t underestimate the value of a free
                ‘Lite’ app.
              </li>
              <li>
                • In-app purchases – put some of your functionality behind a
                paid wall.
              </li>
            </ul>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>
              <p className="mt-2">
                Of course, the above do not have to be exclusive and it’s
                typical to start with one and add more over time.
              </p>
            </div>
          </article>
          <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
            <li className="float-дуае">
              <a
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/services/8-articles/7-how-do-you-develop-a-mobile-application"
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
