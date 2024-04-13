import { logo } from '../assets'

export default function Hero() {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='w-full flex justify-between items-center mb-10 pt-2'>
        <img src={logo} alt='logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/krishnaupadhyay11')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-3.5 Instruct</span>
      </h1>

      <h2 className='desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis est aut doloribus fugit excepturi eligendi autem voluptates dolorem optio eum, alias nihil soluta voluptas rerum sed aperiam blanditiis, nam perspiciatis ipsa dicta.
      </h2>
    </header>
  )
}
