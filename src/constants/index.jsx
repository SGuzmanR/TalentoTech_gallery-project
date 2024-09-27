import { Covenas1 } from "../components/Covenas1";
import { Covenas2 } from "../components/Covenas2";
import { Covenas3 } from "../components/Covenas3";
import { Covenas4 } from "../components/Covenas4";
import { Covenas5 } from "../components/Covenas5";
import { Covenas6 } from "../components/Covenas6";

export const GalleyImages = [
  { path: "/covenas1", element: <Covenas1 className="main-img-container" /> },
  { path: "/covenas2", element: <Covenas2 className="main-img-container" /> },
  { path: "/covenas3", element: <Covenas3 className="main-img-container" /> },
  { path: "/covenas4", element: <Covenas4 className="main-img-container" /> },
  { path: "/covenas5", element: <Covenas5 className="main-img-container" /> },
  { path: "/covenas6", element: <Covenas6 className="main-img-container" /> },
];

export const GalleryNavigation = [
  { caption: "Coveñas 1", to: "/covenas1", element: <Covenas1 className="h-[90px] w-full object-cover" />  },
  { caption: "Coveñas 2", to: "/covenas2", element: <Covenas2 className="h-[90px] w-full object-cover" />  },
  { caption: "Coveñas 3", to: "/covenas3", element: <Covenas3 className="h-[90px] w-full object-cover" />  },
  { caption: "Coveñas 4", to: "/covenas4", element: <Covenas4 className="h-[90px] w-full object-cover" />  },
  { caption: "Coveñas 5", to: "/covenas5", element: <Covenas5 className="h-[90px] w-full object-cover" />  },
  { caption: "Coveñas 6", to: "/covenas6", element: <Covenas6 className="h-[90px] w-full object-cover" />  },
]