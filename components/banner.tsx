interface BannerProps {
  imageUrl: string;
}

export default function Banner({ imageUrl }: BannerProps) {
  return (
    <div className="site-banner" style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',   // Ensures the image covers the div
        backgroundPosition: 'center', // Center the image within the div
      }}>
      <div className="container container-banner"></div>
    </div>
  );
}
