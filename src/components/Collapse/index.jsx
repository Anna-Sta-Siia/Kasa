import { useState } from 'react'
import '../../styles/components/Collapse/collapse.scss'
import arrowToggle from '../../assets/collapsecloseopen.png'

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <img
          src={arrowToggle}
          alt="toggle arrow"
          className={`collapse__icon ${open ? 'open' : ''}`}
        />
      </div>
      {open && (
        <div className="collapse__content">
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : <p>{content}</p>}
        </div>
      )}
    </div>
  )
}
