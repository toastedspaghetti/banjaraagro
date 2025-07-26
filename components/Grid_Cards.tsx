// components/DoctorGrid.tsx
import GridCard from "./GridCard";

interface Doctor {
  name: string;
  title: string;
  imageUrl: string;
  socials?: {
    google?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

interface DoctorGridProps {
  doctors: Doctor[];
  heading?: string;
}

export default function DoctorGrid({ doctors, heading }: DoctorGridProps) {
  return (
    <div className="image-grid-container">
      {heading && <h2 className="grid-heading">{heading}</h2>}
      <div className="doctor-grid">
        {doctors.map((doc, i) => (
          <GridCard key={i} {...doc} />
        ))}
      </div>
    </div>
  );
}
