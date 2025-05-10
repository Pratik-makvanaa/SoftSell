
function Testimonials() {
    const reviews = [
        { name: "John Doe", role: "IT Manager", company: "TechCorp", quote: "SoftSell made it super easy to sell our unused licenses!" },
        { name: "Jane Smith", role: "CFO", company: "FinancePlus", quote: "We recovered value from old software with zero hassle." },
    ];

    return (
        <section className="text-center p-5">
            <h2 className="mb-4">What Our Clients Say</h2>
            <div className="row justify-content-center">
                {reviews.map((review, idx) => (
                    <div key={idx} className="col-md-4 mb-4">
                        <div className="card p-4 shadow-sm">
                            <p className="fst-italic mb-3">"{review.quote}"</p>
                            <p className="fw-bold">{review.name}</p>
                            <p className="text-muted">{review.role}, {review.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
