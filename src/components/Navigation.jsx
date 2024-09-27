import { Link } from "react-router-dom"
import { GalleryNavigation } from "../constants"

const Navigation = () => {
  return (
    <div className="grid grid-cols-6 gap-5 max-[760px]:grid-cols-3">
      {GalleryNavigation.map((item) => (
        <Link key={item.caption} to={item.to} className="flex flex-row no-underline text-center transition-all duration-75 hover:translate-y-[-5px] hover:shadow-sm w-full h-auto">
          <figure className="w-full h-full object-cover">
            {item.element}
            <figcaption>{item.caption}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  )
}

export default Navigation