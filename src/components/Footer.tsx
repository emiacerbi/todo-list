import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  filters: {
    type: string;
    content: string;
  }[],
  filter: string,
  setFilter: Dispatch<SetStateAction<string>>
  theme: string
}

export const Footer = ({ filters, filter, setFilter, theme }: Props) => {
  return (
    <footer className={`footer ${theme}`}>
      {
        filters.map(fil => {
          const { content, type } = fil
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`footer__btn ${type === filter && 'selected'}`}
            >
              {content}
            </button>
          )
        })
      }
    </footer>
  )
}
