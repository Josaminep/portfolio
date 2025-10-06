import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 text-center text-white/80">
      © {new Date().getFullYear()} Josamine Parungao — Built with React + Tailwind
    </footer>
  )
}
