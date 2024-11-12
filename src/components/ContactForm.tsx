import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_xsx89sa';
const EMAILJS_TEMPLATE_ID = 'template_yoa2dv4';
const EMAILJS_PUBLIC_KEY = 'PwdcNqpcR-RNp2Ljx';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
  message: string;
  services: {
    videoServices: boolean;
    audioServices: boolean;
    imageServices: boolean;
    automationServices: boolean;
    contentServices: boolean;
    analyticsServices: boolean;
  };
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    services: {
      videoServices: false,
      audioServices: false,
      imageServices: false,
      automationServices: false,
      contentServices: false,
      analyticsServices: false,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const selectedServices = Object.entries(formData.services)
        .filter(([_, selected]) => selected)
        .map(([service]) => service.replace(/([A-Z])/g, ' $1').toLowerCase())
        .join(', ');

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phone,
        business_name: formData.business,
        selected_services: selectedServices,
        message: formData.message,
        to_name: 'Media Mentor AI',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        business: '',
        message: '',
        services: {
          videoServices: false,
          audioServices: false,
          imageServices: false,
          automationServices: false,
          contentServices: false,
          analyticsServices: false,
        },
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+18483463282';
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
            First Name <span className="text-purple-400">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
            Last Name <span className="text-purple-400">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email <span className="text-purple-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
          Business Name (if applicable)
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleInputChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Services Interested In
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="videoServices"
              name="videoServices"
              checked={formData.services.videoServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="videoServices" className="ml-2 text-gray-300">
              AI Video Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="audioServices"
              name="audioServices"
              checked={formData.services.audioServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="audioServices" className="ml-2 text-gray-300">
              AI Audio Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="imageServices"
              name="imageServices"
              checked={formData.services.imageServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="imageServices" className="ml-2 text-gray-300">
              AI Image Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="automationServices"
              name="automationServices"
              checked={formData.services.automationServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="automationServices" className="ml-2 text-gray-300">
              AI Automation Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="contentServices"
              name="contentServices"
              checked={formData.services.contentServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="contentServices" className="ml-2 text-gray-300">
              AI Content Services
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="analyticsServices"
              name="analyticsServices"
              checked={formData.services.analyticsServices}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-500 rounded border-gray-700 focus:ring-purple-500 bg-gray-900"
              disabled={isSubmitting}
            />
            <label htmlFor="analyticsServices" className="ml-2 text-gray-300">
              AI Analytics Services
            </label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message <span className="text-purple-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      {submitStatus.message && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-900/50 border border-green-500 text-green-300'
              : 'bg-red-900/50 border border-red-500 text-red-300'
          }`}
        >
          <div className="flex items-center">
            {submitStatus.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 mr-2" />
            ) : (
              <Mail className="h-5 w-5 mr-2" />
            )}
            {submitStatus.message}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          className={`flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg transition-all ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <button
          type="button"
          onClick={handleCall}
          className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Phone className="h-5 w-5 mr-2" />
          Book a Call
        </button>
      </div>
    </form>
  );
};

export default ContactForm;