// src/app/products/page.js

import React from "react";
import Image from "next/image";

export default function Appfupage() {
  return (
    <main className="my-div flex bg-[#fafafa] overflow-auto mb-[-1px]">
      <div className="w-[75%]">
        <div className="w-auto text-[0.89em] no-underline mb-0 mt-4">
          <div>
            <span>You are here: </span> &nbsp;
            <a href="/" className="text-[#000000] no-underline"></a>► &nbsp;
            <a href="" className="text-[#000000] no-underline">
              Products
            </a>{" "}
            ►&nbsp;<span>AppFu</span>
          </div>
        </div>
        <div className="float-left pt-5 overflow-hidden mb-7.5">
          <article>
            <div className="flex flex-col lg:block">
              <p>
                <Image
                  src="/logo.png"
                  alt="AppFu logo"
                  width="151"
                  height="180"
                  align="left"
                />
              </p>
              <br className="flex" />
              <div className="hidden lg:block ml-[170px]">
                <p>
                  <strong>AppFu</strong> enables consumers and small to medium
                  size business to build mobile applications, using iOS and
                  Android devices, where the data is automatically and
                  seamlessly shared between collaborators. Applications can be
                  built easily, cheaply and efficiently, directly on the mobile
                  devices, without using any development tools.
                </p>
                <p>
                  This level of collaboration and sharing of data unlocks the
                  capability of mobile devices to location independence and the
                  ability to share information between many hundreds and
                  thousands of mobile devices. AppFu has the added advantage of
                  being simple to use and utilizes natural mobile user
                  interfaces.
                </p>
              </div>
              <br />
              {/* { mobile } */}
              <p className="lg:hidden">
                <strong>AppFu</strong> enables consumers and small to medium
                size business to build mobile applications, using iOS and
                Android devices, where the data is automatically and seamlessly
                shared between collaborators. Applications can be built easily,
                cheaply and efficiently, directly on the mobile devices, without
                using any development tools.
              </p>
              <p className="lg:hidden">
                This level of collaboration and sharing of data unlocks the
                capability of mobile devices to location independence and the
                ability to share information between many hundreds and thousands
                of mobile devices. AppFu has the added advantage of being simple
                to use and utilizes natural mobile user interfaces.
              </p>
              <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3 mt-3">
                Overview
              </h1>
              <p>
                To use the AppFu application, a name, email address and password
                are required. Once credentials are set up a user can access data
                from any iOS or Android device, providing the AppFu application
                has been installed.
              </p>
              <p>
                The basic concept is a List, which contains data of different
                types (attributes) that can be created, edited and deleted.
                Lists use a security infrastructure, so that the creator of a
                list can determine which user(s) have authority to share and/or
                edit the list.
              </p>
              <p>
                Lists are stored on a central server environment, so they are
                persistent, backed up and recoverable.
              </p>
              <br />
              <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3">
                Example applications
              </h1>
              <p>
                Consumers - share information between family members and
                friends:
              </p>
              <ul className="ml-5">
                <li>• Sharing directions and maps</li>
                <li>• Status of homework</li>
                <li>• Task lists</li>
                <li>• Shopping lists</li>
              </ul>
              <p>
                Small and medium size businesses - set schedules and see
                progress of activity:
              </p>
              <ul className="ml-5">
                <li>• Construction material lists</li>
                <li>• Delivery schedule and status</li>
                <li>• Sales calls and recording results</li>
              </ul>
              <br />
              <p>
                The iOS & Android applications are available free from the Apple
                and Android stores and can be installed on both smartphone and
                tablet devices.
              </p>
              <p>
                The free edition allows creation and sharing of up to 5 lists
                per user.
              </p>
              <br />
              <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3">
                General Use
              </h1>
              <div>
                <p>
                  <a
                    href="#login"
                    className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                  >
                    Login
                  </a>{" "}
                  | &nbsp;
                  <a
                    href="#choose_a_list"
                    className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                  >
                    Choose a list
                  </a>{" "}
                  | &nbsp;
                  <a
                    href="#choose_an_item"
                    className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                  >
                    Choose an item
                  </a>{" "}
                  | &nbsp;
                  <a
                    href="#view_modify"
                    className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                  >
                    View/Modify
                  </a>
                </p>
                <div>
                  <div>
                    <br />
                    <div id="login">
                      <h3>Login</h3>
                      <Image
                        src="/slideshow01.jpg"
                        alt="Photo"
                        border="0"
                        width={202}
                        height={759}
                      ></Image>
                      <p>
                        Users log in using their email address and password.
                      </p>
                      <p>
                        New users can create accounts directly within the
                        application.
                      </p>
                      <p>
                        {
                          "Password recovery is straightforward; the system will send an email with a new password to the user's registered email address."
                        }
                      </p>
                    </div>
                    <br />
                    <div id="choose_a_list">
                      <h3>Choose a list</h3>
                      <Image
                        src="/slideshow02.jpg"
                        alt="Photo"
                        border="0"
                        width={205}
                        height={392}
                      />
                      <p>
                        Once started, the application checks which lists the
                        user has access to (allowed to view or modify) and
                        displays them on the screen.
                      </p>
                      <p>
                        This page has an <em>Edit</em> button, allowing the user
                        (depending on permissions) to manage the lists -
                        altering their structure, changing who they are shared
                        with, etc. This is also the screen where new lists are
                        created.
                      </p>
                    </div>
                    <br />
                    <div id="choose_an_item">
                      <h3>Choose an item</h3>
                      <Image
                        src="/slideshow03.jpg"
                        alt="Photo"
                        border="0"
                        width={205}
                        height={392}
                      ></Image>
                      <p>
                        Once a list has been selected the items within it are
                        shown. This is where the user searches for lists, sorts
                        them, selects an item to view/modify, adds a new item,
                        deletes, etc.
                      </p>
                    </div>
                    <br />
                    <div id="view_modify">
                      <h3>View/Modify</h3>
                      <Image
                        src="/slideshow04.jpg"
                        alt="Photo"
                        border="0"
                        width={205}
                        height={392}
                      ></Image>
                      <p>
                        The contents of the item are shown in an intuitive, easy
                        to read form. Each element is easy to read &amp; edit,
                        as well as to use, for example - one click to:
                      </p>
                      <ul className="ml-5">
                        <li>• Start a call to a phone number</li>
                        <li>• Create an email to an address</li>
                        <li>• Open the browser at a web URL</li>
                        <li>• See a map of an address</li>
                        <li>• Add a comment</li>
                        <li>• View a photo full-screen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h1 className="font-sans font-normal text-[#90c140] text-[22px] leading-[1.15em] mb-3">
              <h1>Creating a New Application</h1>
            </h1>
            <div>
              <p>
                <a
                  href="#choose_name"
                  className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                >
                  Choose Name
                </a>{" "}
                | &nbsp;
                <a
                  href="#share"
                  className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                >
                  Share
                </a>{" "}
                | &nbsp;
                <a
                  href="#add_attributes"
                  className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                >
                  Add Attributes
                </a>{" "}
                | &nbsp;
                <a
                  href="#advanced_options"
                  className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                >
                  Advanced Options
                </a>{" "}
                | &nbsp;
                <a
                  href="#list_options"
                  className="font-sans font-normal text-[#90c140] leading-[1.15em] mb-3 underline"
                >
                  List Options
                </a>
              </p>
              <div>
                <div>
                  <br />
                  <div id="choose_name">
                    <h3>Choose Name</h3>
                    <Image
                      src="/slideshow2-01.jpg"
                      alt="Photo"
                      width={205}
                      height={392}
                    ></Image>
                    <p>Start a new list by choosing its name.</p>
                  </div>
                  <br />
                  <div id="share">
                    <h3>Share</h3>
                    <Image
                      src="/slideshow2-02.jpg"
                      alt="Photo"
                      width={205}
                      height={392}
                    ></Image>
                    <p>
                      Decide who to share the list with, selecting by group or
                      individual.
                    </p>
                    <p>
                      There are similar screens to decide who can modify and
                      manage the list.
                    </p>
                  </div>
                  <br />
                  <div id="add_attributes">
                    <h3>Add Attributes</h3>
                    <Image
                      src="/slideshow2-03.jpg"
                      alt="Photo"
                      width={205}
                      height={392}
                    ></Image>
                    <p>Add attributes to the list. Not shown are:</p>
                    <ul className="ml-5">
                      <li>• Time</li>
                      <li>• Date</li>
                      <li>• Duration</li>
                    </ul>
                    <p>Attributes can also be grouped.</p>
                  </div>
                  <br />
                  <div id="advanced_options">
                    <h3>Advanced Options</h3>
                    <Image
                      src="/slideshow2-04.jpg"
                      alt="Photo"
                      width={205}
                      height={392}
                    ></Image>
                    <p>Each attribute has many advanced options, such as:</p>
                    <ul className="ml-5">
                      <li>• A default value</li>
                      <li>• Whether the attribute is required</li>
                      <li>• Whether the attribute is visible</li>
                      <li>
                        • Whether the label should be hidden (useful for images)
                      </li>
                      <li>• Maximum length</li>
                      <li>• Min and max values</li>
                      <li>• Whether to choose from a picklist</li>
                      <li>• How many decimal points</li>
                      <li>• The currency</li>
                    </ul>
                  </div>
                  <br />
                  <div id="list_options">
                    <h3>List Options</h3>
                    <Image
                      src="/slideshow2-05.jpg"
                      alt="Photo"
                      width={205}
                      height={392}
                    ></Image>
                    <p>
                      The user can also choose default sorting and which
                      attributes are displayed on the main list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-none m-0 mt-5 p-1 overflow-hidden">
              <li className="float-right">
                <a
                  href="/products/digital-archive-platform"
                  rel="prev"
                  className="font-sans font-normal text-[13.5px] text-[#fff] bg-[#90c140] border-0 px-3 py-1 ml-0 rounded-[3px] no-underline"
                >
                  &lt; Prev
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div className="w-[25%] m-0 mt-5 mb-7.5 ml-[26px] float-right leading-[1.7em] min-w-[150px]">
        <div className="overflow-hidden mb-4">
          <div>
            <p>
              <Image src="/AppFu screenshots for sidebar.jpg" width={205} height={392}></Image>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
