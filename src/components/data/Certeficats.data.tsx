import { v4 as uuidv4 } from "uuid";
import aws from "../../assets/certificats/aws.jpg";
import ccna1 from "../../assets/certificats/ccna1.jpg";
import sql from "../../assets/certificats/sql.jpg";
export const items = [
  {
    key: uuidv4(),
    content: <img src={aws} alt="aws" />,
  },
  {
    key: uuidv4(),
    content: <img src={ccna1} alt="2" />,
  },
  {
    key: uuidv4(),
    content: <img src={sql} alt="3" />,
  },
];
