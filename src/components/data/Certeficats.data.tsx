import aws from "../../assets/certificats/aws.jpg";
import ccna1 from "../../assets/certificats/ccna1.jpg";
import sql from "../../assets/certificats/sql.jpg";

export interface Certificate {
  id: string;
  image: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-academy-cloud-foundations",
    image: aws,
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "Dec 2024",
    credentialUrl: "https://www.credly.com/go/shjPKMKw",
  },
  {
    id: "ccna-introduction-to-networks",
    image: ccna1,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Feb 2024",
  },
  {
    id: "sql-associate",
    image: sql,
    title: "SQL Associate",
    issuer: "DataCamp",
    date: "Feb 2025",
  },
];
