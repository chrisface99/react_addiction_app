
import './Title.css'
  export default function Title ({ title, subtitle}) {
  return (
    <div className="title-block">
 <div className="title">{title}</div>
 <br />
 <div className="subtitle">{subtitle}</div>
    </div>
  )
  }