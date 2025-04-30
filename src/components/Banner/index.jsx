import "../../styles/components/Banner/banner.scss";

export default function Banner({ title, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {title && <div className="banner__overlay"></div>}
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}
