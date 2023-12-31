import React from 'react'

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="rounded-5 z-1000 fixed bottom-4 right-4 cursor-pointer border-none bg-zinc-900 px-2 py-2 text-white dark:bg-white dark:text-zinc-900"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 14.25L12 10.75L8.75 14.25"
        ></path>
      </svg>
    </button>
  )
}

export default BackToTopButton
