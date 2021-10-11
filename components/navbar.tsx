// import CricektBat from '../assets/cricketball.svg'
import CricektBat from '../assets/cricket-bat.svg'

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between mx-auto md:px-6 md:py-4">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a className="focus:outline-none" href="/">
            <div className="flex items-center no-underline">
              <CricektBat/>
              <h1 className="text-xl font-bold tracking-tight mb-0 pt-4 pl-0">Numbery</h1>
            </div>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        {/* <div
          className="lg:flex flex-grow items-center"
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                href="#about"
              >
                About
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar
