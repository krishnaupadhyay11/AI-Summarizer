// import logo from ''

export default function Hero() {
  return (
    <header className="w-full flex flex-col justify-center items-center">
        <nav className="flex justify-between items-center w-full px-2 pt-3 mb-10">
            <img src="" alt="ramram" className="w-28 object-contain" />
            <button type="button" onClick={() => window.open('https://github.com/krishnaupadhyay11')} className="black_btn"> 
                GitHub
            </button>
        </nav>
    </header>
  )
}