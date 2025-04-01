import { FaGithub, FaNodeJs } from "react-icons/fa";

import {
  SiAngular,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiMysql,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

// Technology icon mapping
export const techIcons: { [key: string]: JSX.Element } = {
  Angular: <SiAngular className="text-red-500" />,
  Docker: <SiDocker className="text-blue-500" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-400" />,
  GitHub: <FaGithub className="text-white" />,
  React: <SiReact className="text-blue-500" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  ExpressJS: <SiExpress className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  Laravel: <SiLaravel className="text-red-600" />,
  VueJS: <SiVuedotjs className="text-green-400" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  Redux: <SiRedux className="text-purple-500" />,
  MySQL: <SiMysql className="text-blue-500" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,
};
