import { FaArrowLeft } from "react-icons/fa";

const Imprint = () => {
  return (
    <main className="min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center flex-row space-x-1 pb-4 text-gray-700 hover:text-black"
        >
          <FaArrowLeft className="text-xs" />
          <p>Back to Home</p>
        </a>
        <h1 className="mb-6 text-4xl font-semibold">Imprint</h1>
        <div className="space-y-7">
          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Information according to § 5 TMG
            </h2>
            <p className="text-gray-700">Lukas Haible</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Contact</h2>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@nuvra-ui.com"
                className="hover:text-black underline"
              >
                info@nuvra-ui.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Disclaimer</h2>
            <p className="text-gray-700">
              This is a non-commercial open source project. The software is
              provided "as is", without warranty of any kind, express or
              implied.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              Liability for Content
            </h2>
            <p className="text-gray-700">
              The contents of this website have been created with the utmost
              care. However, I cannot guarantee the accuracy, completeness, or
              timeliness of the content. As a service provider, I am responsible
              for my own content on these pages according to general laws.
              However, I am not obligated to monitor transmitted or stored
              third-party information or to investigate circumstances that
              indicate illegal activity.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Liability for Links</h2>
            <p className="text-gray-700">
              This website contains links to external third-party websites over
              whose content I have no influence. Therefore, I cannot assume any
              liability for this external content. The respective provider or
              operator of the linked pages is always responsible for the content
              of the linked pages. The linked pages were checked for possible
              legal violations at the time of linking. Illegal content was not
              recognizable at the time of linking.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Imprint;
