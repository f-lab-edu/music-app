'use client'
export default function Footer() {
  // const router = useRouter()

  return (
    <>
      <header className="header">
        <nav className="fixed top-0 py-3 transition-all duration-400">
          <div className="container">
            <a href="#" className="text-uppercase font-bold text-white">
              Transparent Nav
            </a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
              <i className="fa fa-bars"></i>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className=" ml-auto">
                <li className=" active">
                  <a href="#" className="text-uppercase font-bold text-white">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="">
                  <a href="#" className="nav-link text-uppercase font-bold text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
