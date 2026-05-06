export default function TrustStrip() {
  const services = [
    { id: '01', label: 'Mobile Fleet' },
    { id: '02', label: 'Exterior Detail' },
    { id: '03', label: 'Paint Correction' },
    { id: '04', label: 'Interior Reset' },
    { id: '05', label: 'Full Restoration' },
    { id: '06', label: 'Ceramic Coating' },
    { id: '07', label: 'Tech Install' },
    { id: '08', label: 'CarPlay & DashCam' },
  ];
  const loopItems = [...services, ...services];

  return (
    <section className="service-signal-wrap relative z-20">
      <div className="service-signal">
        <div className="service-signal-track" aria-label="Signature service highlights">
          {loopItems.map((item, index) => (
            <div className="service-signal-item" key={`${item.label}-${index}`}>
              <span className="service-signal-index">{item.id}</span>
              <span className="service-signal-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
