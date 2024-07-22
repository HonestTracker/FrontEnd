// Banner.js
export default function Banner() {
    return (
      <div className="absolute top-0 w-full isolate flex items-center  bg-gray-50 py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-1 items-center justify-between gap-x-4 gap-y-2 flex-wrap">
          <p className="text-sm text-gray-900">
            <strong className="font-semibold">Subscription honesttracker</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Get a membership to experience bonuses and features
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-none">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            {/* Add icon for dismiss button here */}
          </button>
        </div>
      </div>
    );
  }
  