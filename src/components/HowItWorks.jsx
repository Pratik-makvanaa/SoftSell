function HowItWorks() {
  const steps = [
    { icon: "📤", title: "Upload License" },
    { icon: "📊", title: "Get Valuation" },
    { icon: "💸", title: "Get Paid" },
  ];

  return (
    <section className="text-center p-5">
      <h2 className="mb-4">How It Works</h2>
    <div className="row justify-content-center">
    {steps.map((step, index) => (
    <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card p-4 shadow-sm rounded-3 h-100">
        <div className="display-4 mb-3">{step.icon}</div>
        <h5>{step.title}</h5>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}

export default HowItWorks;



