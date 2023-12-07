
function SeeMoreButton() {
  return (
          <div className="flex justify-center">
            <button className="absolute text-[2.2vw] group mt-6">
              <span className="relative z-10 block px-5 py-3 overflow-hidden text-neutral-900 duration-300 ease-out border-2 border-neutral-900 group-hover:text-white">
                <span className="absolute inset-0 w-full h-full bg-white"></span>
                <span className="absolute left-0 top-[2vw] w-60 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-neutral-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">See more...</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-[5vw] -mb-1.5 -mr-1.5 transition-all duration-200 ease-linear bg-neutral-900  group-hover:mb-0 group-hover:mr-0"
                data-rounded=""
              ></span>
            </button>
          </div>
  )
}

export default SeeMoreButton