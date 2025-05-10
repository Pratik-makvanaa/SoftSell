import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section
            className="text-center p-5  rounded-3 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="display-3 fw-bold mb-3">Turn Unused Software Licenses Into Cash</h1>
            <p className="lead mb-4">SoftSell makes it simple, fast, and secure to sell your old licenses.</p>
            <button className="btn btn-light btn-lg rounded-pill shadow">Get a Free Quote</button>
        </motion.section>
    );
}
