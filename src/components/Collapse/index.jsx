import { useState } from 'react'
import '../../styles/components/Collapse/collapse.scss'


export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? '▲' : '▼'}</span>
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
