import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div class="logo-holder logo-4 object-contain">
          <h3>Synopsizer</h3>
          <p>Let's Summarize</p>
      </div>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Ananya281/Synopsizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Make reading effortless with Summize, an open-source tool that converts long articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;