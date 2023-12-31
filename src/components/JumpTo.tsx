'use client'
export const handleClick = (number: number) => {
  // Update the URL hash without reloading the page
  const newHash = `chapter-${number}`
  window.history.pushState(null, '', `#${newHash}`)
  // Navigate to the specific anchor tag
  const anchor = document.getElementById(`chapter-${number}`)
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
