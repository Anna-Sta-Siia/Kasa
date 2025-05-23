import { useState } from "react";
import "../../styles/components/Collapse/collapse_accommodation.scss";
import arrowToggle from "../../assets/collapsecloseopen.png";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <img
          src={arrowToggle}
          alt="toggle arrow"
          className={`collapse__icon ${open ? "open" : ""}`}
        />
      </div>

      <div className={`collapse__content ${open ? "open" : ""}`}>
        {Array.isArray(content) ? (
          content.map((item) => <p key={item}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
