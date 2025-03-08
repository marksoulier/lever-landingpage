import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    planTitle: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
    isOpen,
    onClose,
    planTitle,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        business_name: '',
        from_name: '',
        from_email: '',
        phone: '',
    });

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimatingIn, setIsAnimatingIn] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
            // Trigger animation in after a frame
            requestAnimationFrame(() => {
                setIsAnimatingIn(true);
            });
        } else {
            setIsAnimatingIn(false);
            document.body.style.overflow = 'unset';
            // Wait for animation to finish before hiding
            setTimeout(() => setIsVisible(false), 300);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.from_email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        try {
            // Create template parameters
            const templateParams = {
                from_name: formData.from_name,
                to_name: 'Lever AI Team',
                from_email: formData.from_email,
                company: formData.business_name,
                phone: formData.phone,
                plan_type: planTitle,
                message: `New ${planTitle} plan request from ${formData.from_name} at ${formData.business_name}`
            };

            // Send email using EmailJS
            await emailjs.send(
                'service_jj1wsqp',
                'template_0qdtk3f',
                templateParams,
                'TrAW6-R-IGHMVtP7Z'
            );

            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Failed to send email:', error);
            setError('There was an error submitting the form. Please try again.');
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };

    if (!isVisible) return null;

    return (
        <div
            onClick={handleClickOutside}
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-[2px]
                ${isAnimatingIn ? 'bg-black/10' : 'bg-transparent'}`}
        >
            <div
                ref={modalRef}
                className={`bg-white rounded-2xl p-8 w-full max-w-md relative transform transition-all duration-300 ease-out
                    shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                    ${isAnimatingIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                    ✕
                </button>

                {!isSubmitted ? (
                    <>
                        <h2 className="text-4xl font-medium text-black mb-6 font-['Poppins']">
                            {planTitle === 'Discover' ? 'Free Discovery Account' :
                                planTitle === 'Design Partner' ? 'Become a Design Partner' :
                                    'Full Power with Enterprise'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                            <div>
                                <label htmlFor="business_name" className="block text-base font-medium text-slate-500 mb-2 font-['Spline_Sans']">
                                    Business Name
                                </label>
                                <input
                                    id="business_name"
                                    type="text"
                                    name="business_name"
                                    value={formData.business_name}
                                    onChange={handleChange}
                                    placeholder="Your Company Name"
                                    required
                                    className="w-full px-4 py-3 border border-[#EFF0F6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] text-base font-['Spline_Sans'] transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact_name" className="block text-base font-medium text-slate-500 mb-2 font-['Spline_Sans']">
                                    Name
                                </label>
                                <input
                                    id="contact_name"
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-4 py-3 border border-[#EFF0F6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] text-base font-['Spline_Sans'] transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-medium text-slate-500 mb-2 font-['Spline_Sans']">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="from_email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    placeholder="john.doe@example.com"
                                    required
                                    className="w-full px-4 py-3 border border-[#EFF0F6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] text-base font-['Spline_Sans'] transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-base font-medium text-slate-500 mb-2 font-['Spline_Sans']">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1234567890"
                                    className="w-full px-4 py-3 border border-[#EFF0F6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-400)] text-base font-['Spline_Sans'] transition-all duration-200"
                                />
                            </div>
                            {error && (
                                <p className="text-red-500 text-sm font-['Spline_Sans']">{error}</p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full h-[60px] text-lg rounded-[50px] font-medium transition-all duration-300 ease-in-out
                                    bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)]
                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} font-['Poppins']`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8 transform transition-all duration-300 ease-in-out">
                        <h3 className="text-4xl font-medium mb-4 text-black font-['Poppins']">Successfully Submitted</h3>
                        <div className="space-y-4 mb-8">
                            <p className="text-base leading-8 text-slate-500 font-['Spline_Sans']">
                                {planTitle === 'Discover'
                                    ? "Get started with your free discovery account!"
                                    : planTitle === 'Design Partner'
                                        ? "Welcome to the Lever AI Design Partner program!"
                                        : "Welcome to Lever AI Enterprise!"}
                            </p>
                            <p className="text-base leading-8 text-slate-500 font-['Spline_Sans']">
                                {planTitle === 'Discover'
                                    ? <>Schedule a <span className="font-bold">quick setup call</span> to maximize your free trial experience.</>
                                    : planTitle === 'Design Partner'
                                        ? <>Let's discuss your <span className="font-bold">vision and requirements</span> in a personalized setup meeting.</>
                                        : <>Book a <span className="font-bold">comprehensive demo</span> to explore full enterprise capabilities.</>}
                            </p>
                        </div>
                        <a
                            href={planTitle === 'Discover'
                                ? "https://cal.com/lever-ai/lever-ai-free-setup"
                                : "https://cal.com/lever-ai/lever-ai-demo"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-[60px] px-12 bg-[var(--primary-500)] text-white rounded-[50px] hover:bg-[var(--primary-600)] transition-colors duration-300 font-medium text-lg font-['Poppins'] mx-auto"
                        >
                            {planTitle === 'Discover' ? 'Schedule Free Setup' : 'Schedule Setup Meeting'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}; 