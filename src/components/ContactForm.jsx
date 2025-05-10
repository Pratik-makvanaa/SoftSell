
import { useState } from "react";

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", company: "", licenseType: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.licenseType) {
            alert("Form submitted successfully!");
            setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
        } else {
            alert("Please fill in the required fields.");
        }
    };

    return (
        <section className="bg-secondary p-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="container">
                <div className="mb-3">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Name *" className="form-control" required />
                </div>
                <div className="mb-3">
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="form-control" required />
                </div>
                <div className="mb-3">
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="form-control" />
                </div>
                <div className="mb-3">
                    <select name="licenseType" value={form.licenseType} onChange={handleChange} className="form-select" required>
                        <option value="">Select License Type *</option>
                        <option>Office 365</option>
                        <option>Adobe CC</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-light w-100">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
