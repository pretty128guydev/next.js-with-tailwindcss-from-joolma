import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#fafafa] overflow-auto mb-[-1px]">
      <div className="my-div mx-auto">
        <div className="w-auto text-[0.89em] no-underline mb-0 mt-4">
          <div>
            <span>You are here: </span>
            <span>Home</span>
          </div>
        </div>
        <div className="float-left pt-5 overflow-hidden mb-7.5">
          <article>
            <p className="mt-2">
              Smartphones and mobile apps are becoming prevalent, however use
              has been centered mainly on the capabilities of individual mobile
              devices. This has slowly extended to tablet devices and new areas
              including games, finance, lifestyle, etc, but applications
              typically have limited collaboration or integration into
              enterprise/web systems. Tynesoft unlocks the capability of
              smartphone apps to collaborate with other smartphone apps and
              enterprise/web systems.
            </p>
            <p className="mt-2">
              Tynesoft has unique experience in mobile apps, enterprise & web
              software development, allowing us to extend the reach of
              enterprise & web systems onto mobile devices and to enable
              collaboration between mobile users.
            </p>
            <p className="mt-2">
              Tynesoft offers &nbsp;
              <a
                className="text-[#90c140] underline"
                href="/services"
              >
                services
              </a>
              &nbsp; centered around the intersection of enterprise/web and
              mobile applications:
            </p>
            <ul className="ml-5">
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Mobile User Interface design
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Technology selection
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Mobile application development
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Enterprise/web application development
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Branding
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; QA
                </span>
              </li>
              <li>
                •
                <span className="font-bold text-[#90c140] bg-transparent">
                  &nbsp; Publishing
                </span>
              </li>
            </ul>
            <p className="mt-2">
              We also develop and market our own mobile products that utilize
              our expertise in enterprise applications and mobile collaboration.
              Our mobile apps are aimed at small to medium size businesses, the
              <a
                className="text-[#90c140] underline"
                href="/products/appfu"
              >
                {" "}
                AppFu
              </a>{" "}
              application also targeting consumers.
            </p>
            <br />
            <p className="mt-2">
              <Image
                className="block mx-auto"
                src="/composite_alt_small.jpg"
                width={550}
                height={475}
              />
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
