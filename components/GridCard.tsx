// components/DoctorCard.tsx
import Image from "next/image";
import Link from "next/link";

interface GridCardProps {
  name: string;
  title: string;
  imageUrl: string;
  socials?: {
    google?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export default function GridCard({ name, title, imageUrl, socials }: GridCardProps) {
  return (
    <div className="doctor-card">
      <div className="image-wrapper">
        <Image src={imageUrl} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="info-box">
        <h3>{name}</h3>
        <p>{title}</p>
        {socials && (
          <div className="social-icons">
            {socials.google && <Link href={socials.google}>G</Link>}
            {socials.facebook && <Link href={socials.facebook}>F</Link>}
            {socials.whatsapp && <Link href={socials.whatsapp}>W</Link>}
          </div>
        )}
      </div>

    </div>
  );
}
