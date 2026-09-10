'use client';

import React, { useState } from 'react';
import Img from '@/app/components/ui/Img';
import {
    FaBuilding, FaEnvelope, FaPhoneAlt,
    FaMediumM, FaLinkedin, FaGithub,
} from 'react-icons/fa';
import { useInView } from '@/app/hooks/useInView';
import {sendEmail} from "@/app/services/email_service/email_service";
export default function Contact() {
    const { ref, inView } = useInView();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setStatus('sending');
        try {
            const data = await sendEmail(formData);
            if (data) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setStatus('sent');
                setFormData({ name: '', company: '', email: '', subject: '', message: '' });
            }
        } catch (err: any) {
            setErrorMsg(err.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    const socials = [
        { icon:  FaMediumM, href: 'https://facebook.com' },
        { icon: FaLinkedin, href: 'https://instagram.com' },
        { icon: FaGithub, href: 'https://twitter.com' },
    ];

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="contact" className="w-full relative">
            {/* Background image with overlay */}
            <div className="relative h-72 w-full">
                <Img
                    src="/images/contact-bg.png"
                    alt="Contact background"
                    fill
                    className="object-contain object-right"
                />
                <div className="absolute inset-0 bg-blue-900/70" />

                {/* Header text */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Contact me
                    </h2>
                    <p className="text-blue-100 max-w-md text-sm md:text-base">
                        I'm ready to provide the right solution according to your needs
                    </p>
                </div>
            </div>

            {/* Card overlapping the image */}
            <div className="max-w-5xl mx-auto px-8 -mt-24 relative z-10 pb-20">
                <div className={`bg-white rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden reveal ${inView ? 'visible' : ''}`}>
                    {/* Left - Get in touch */}
                    <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Get in touch</h3>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            Feel free to reach out through any of the channels below, I'll respond as soon as I can.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0" suppressHydrationWarning>
                                    <FaBuilding size={16} suppressHydrationWarning />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Based In</p>
                                    <p className="text-sm text-gray-500">Kenitra, Morocco</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0" suppressHydrationWarning>
                                    <FaEnvelope size={16} suppressHydrationWarning />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Email Me</p>
                                    <p className="text-sm text-gray-500">hajar.aitabdielmomin@gmail.com</p>

                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0" suppressHydrationWarning>
                                    <FaPhoneAlt size={16} suppressHydrationWarning />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Call Me</p>
                                    <p className="text-sm text-gray-500">Phone: +212 601 409071</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="font-semibold text-gray-900 text-sm mb-3">Follow me on social media</p>
                            <div className="flex items-center gap-3">
                                {socials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                        suppressHydrationWarning
                                    >
                                        <social.icon size={14} suppressHydrationWarning />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Send message form */}
                    <div className="p-8 md:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Name"
                                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-xs font-medium text-gray-500 mb-1">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company"
                                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>


                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => { handleChange(e); if (status === 'error') setStatus('idle'); }}
                                        required
                                        placeholder="Email"
                                        className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${status === 'error' && errorMsg.toLowerCase().includes('email') ? 'border-red-400' : 'border-gray-200'}`}
                                    />
                                    {status === 'error' && errorMsg.toLowerCase().includes('email') && (
                                        <p className="text-xs text-red-500 mt-1">{errorMsg}</p>
                                    )}
                                </div>


                            <div>
                                <label htmlFor="subject" className="block text-xs font-medium text-gray-500 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Select"
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Message"
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full sm:w-auto bg-blue-500 text-white px-10 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send'}
                            </button>

                            {status === 'sent' && (
                                <p className="text-sm text-green-600 font-medium">
                                    ✓ Message sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-600 font-medium">
                                    {errorMsg || 'Something went wrong. Please try again.'}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}