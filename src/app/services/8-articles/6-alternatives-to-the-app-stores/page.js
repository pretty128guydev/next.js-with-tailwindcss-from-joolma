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
            Alternatives to the app stores
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
          <article>
            <p className="mt-3">
              Tynesoft offers services centered around the intersection of
              enterprise/web and mobile applications:
            </p>
            <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3 mt-3">
              Apple iOS
            </h1>
            <ul className="ml-5">
              <li className="flex">
                •
                <p className="ml-2">
                  AdHoc: As part of your development account with Apple you can
                  nominate 100 test devices, identified by their unique UUIDs.
                  While collecting these and adding to the application’s
                  provisioning profile is a bit painful, it does allow you to
                  install test apps on any of those 100 devices. The actual
                  installation process is also a bit painful, requiring the test
                  user to drop the embedded.mobileprovision and .ipa file into
                  iTunes and then sync to their device.
                </p>
              </li>
              <li className="flex">
                •
                <p className="ml-2">
                  Enterprise: This option allows you to distribute applications
                  to others in your organization wirelessly (iOS4/5-only), via
                  the iPhone Configuration Utility or via iTunes, with the
                  former clearly being the easiest for most users. Requirements
                  – a DUNS number for your company and $299. As usual you’ll
                  need a certificate and provisioning profile, plus a manifest
                  file for wireless installations. More details{" "}
                  <a
                    className="text-[#2089cc] underline outline-none"
                    title="Apple article on Enterprise deployment"
                    href="http://developer.apple.com/library/ios/#featuredarticles/FA_Wireless_Enterprise_App_Distribution/Introduction/Introduction.html"
                  >
                    here
                  </a>
                  . Note that Apple specifies this is for ‘
                  <em>
                    in-house apps for employees or members of your organization
                  </em>
                  ‘, in other words, not a general purpose distribution
                  mechanism.
                </p>
              </li>
            </ul>
            <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3 mt-3">
              Android
            </h1>
            <ul className="ml-5">
              <li className="flex">
                •
                <p className="ml-2">
                  Over-the-air (wireless) download of the .apk file. All you
                  need to do is direct the user to the download link and the app
                  will be downloaded to their device. There is one extra step to
                  actually install it once it’s been downloaded, but it’s easy.
                  Note that the user will need to enable ‘Unknown sources’ in
                  Options/Applications.
                </p>
              </li>
              <li className="flex">
                •
                <p className="ml-2">
                  Email: simply email the .apk file to users
                </p>
              </li>
              <li className="flex">
                •
                <p className="ml-2">
                  SMS: send user’s the link to your over-the-air link
                </p>
              </li>
            </ul>
            <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3 mt-3">
              Blackberry
            </h1>
            <div>
              <ul className="ml-5">
                <li className="flex">
                  •
                  <p className="ml-2">
                    Push: use your BlackBerry Enterprise Server (BES) push the
                    application to the device. This falls into what I call{" "}
                    <a
                      className="text-[#90c140] underline"
                      title="BES App Push"
                      href="http://www.blackberry.com/btsc/search.do?cmd=displayKC&amp;docType=kc&amp;externalId=KB03748&amp;sliceId=SAL_Public&amp;dialogID=151008089&amp;stateId=1%200%20151002852"
                    >
                      non-trivial
                    </a>
                    .
                  </p>
                </li>
                <li className="flex">
                  •
                  <p className="ml-2">
                    OTA: allow users to donwload the application directly to
                    their device. You need to be careful with the .jad files,
                    size of .cod files and making sure you web server has the
                    correct MIME-types:
                    <pre>
                      <p className="mt-2" style={{ fontFamily: "monospace" }}>
                        .cod files: application/vnd.rim.cod
                      </p>
                      <p className="mt-2" style={{ fontFamily: "monospace" }}>
                        .jad files: text/vnd.sun.j2me.app-descriptor
                      </p>
                    </pre>
                    <p className="mt-2">
                      More info{" "}
                      <a
                        className="text-[#90c140] underline"
                        title="OTA Blackberry deployment"
                        href="http://assets.handango.com/marketing/developerTeam/BlackBerryOTADeployment.pdf"
                      >
                        here
                      </a>
                      . Here’s the{" "}
                      <a
                        className="text-[#90c140] underline"
                        title="Deploying Java Applications"
                        href="http://www.blackberry.com/knowledgecenterpublic/livelink.exe/fetch/2000/7979/1181821/832210/Deploying_Java_Applications.pdf?nodeid=1270269&amp;vernum=0"
                      >
                        full scoop from RIM
                      </a>
                      .
                    </p>
                  </p>
                </li>
                <li className="flex mt-2">
                  •
                  <p className="ml-2">
                    Via the Blackberry Desktop Software: do your users a favor
                    and skip this option.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
            <li className="float-right">
              <a
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/services/8-articles/7-how-do-you-develop-a-mobile-application"
                rel="next"
              >
                {"Next > "}
              </a>
            </li>
            <li className="float-left">
              <a
                className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 rounded-md no-underline"
                href="/services"
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
