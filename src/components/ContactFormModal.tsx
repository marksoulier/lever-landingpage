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
                        <div className="bg-primary/5 border-b border-primary/10 p-6 -m-8 mb-6">
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground mb-2">
                                    ✨ <strong>Become a UX Tester</strong> - Share 1 hour of feedback with our financial coach
                                </p>
                                <p className="text-xs text-muted-foreground mb-3">
                                    Get lifetime access to premium features in exchange for helping us improve the tool
                                </p>
                                <a
                                    href="https://cal.com/lever-ai/financial-planner-ux-tester"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors"
                                >
                                    Schedule UX Session →
                                </a>
                            </div>
                        </div>
                        <h2 className="text-4xl font-medium text-black mb-6 font-['Poppins']">
                            Join Our Newsletter
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                            <div>
                                <label htmlFor="from_name" className="block text-base font-medium text-slate-500 mb-2 font-['Spline_Sans']">
                                    Name
                                </label>
                                <input
                                    id="from_name"
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
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
                                    Phone Number (Optional)
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
                        <h3 className="text-4xl font-medium mb-4 text-black font-['Poppins']">Get Early Access!</h3>
                        <div className="space-y-4 mb-8">
                            <p className="text-base leading-8 text-slate-500 font-['Spline_Sans']">
                                Thanks for joining our newsletter! Want to get <span className="font-bold">lifetime access to premium features for free</span>?
                            </p>
                            <p className="text-base leading-8 text-slate-500 font-['Spline_Sans']">
                                Join our UX testing team and share your feedback with our financial coach. It only takes 1 hour!
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <a
                                href="https://cal.com/lever-ai/financial-planner-ux-tester"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-[60px] px-12 bg-[var(--primary-500)] text-white rounded-[50px] hover:bg-[var(--primary-600)] transition-colors duration-300 font-medium text-lg font-['Poppins']"
                            >
                                Schedule UX Session →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}; 