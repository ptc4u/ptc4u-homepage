/**
 * Form utility functions for PTC website
 * Provides common form handling functionality
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const createMailtoLink = (email, subject, body) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const openMailtoWithFallback = (mailtoLink, fallbackMessage) => {
  try {
    const opened = window.open(mailtoLink, '_blank');
    if (opened && !opened.closed) {
      return;
    }
  } catch (error) {
    // Continue to fallback
  }

  try {
    window.location.href = mailtoLink;

    setTimeout(() => {
      showFallbackDialog(fallbackMessage);
    }, 2000);

  } catch (error) {
    showFallbackDialog(fallbackMessage);
  }
};

export const showFallbackDialog = (message) => {
  // Create a modal dialog with the email content
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white p-8 rounded-lg max-w-2xl mx-4 max-h-96 overflow-y-auto">
      <h3 class="text-xl font-bold mb-4 text-black">Email Client Not Available</h3>
      <p class="mb-4 text-black">Please copy the following information and send it to <strong>ask@ptc4u.com</strong>:</p>
      <div class="bg-gray-100 p-4 rounded border">
        <pre class="whitespace-pre-wrap text-sm text-black">${message}</pre>
      </div>
      <div class="mt-4 flex gap-4">
        <button id="copyBtn" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Copy to Clipboard
        </button>
        <button id="whatsappBtn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Send via WhatsApp
        </button>
        <button id="closeBtn" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
          ✕ Close
        </button>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        <p><strong>Alternatives:</strong> You can also call us directly at <a href="tel:+919845106272" class="text-blue-600 hover:text-blue-800">+91 98451 06272</a></p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Add event listeners
  const copyBtn = modal.querySelector('#copyBtn');
  const whatsappBtn = modal.querySelector('#whatsappBtn');
  const closeBtn = modal.querySelector('#closeBtn');

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message);
      copyBtn.textContent = '✅ Copied!';
      copyBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
      copyBtn.classList.add('bg-green-500');
      setTimeout(() => {
        copyBtn.textContent = 'Copy to Clipboard';
        copyBtn.classList.remove('bg-green-500');
        copyBtn.classList.add('bg-blue-500', 'hover:bg-blue-600');
      }, 2000);
    } catch (err) {
      copyBtn.textContent = 'Copy Failed';
      setTimeout(() => {
        copyBtn.textContent = 'Copy to Clipboard';
      }, 2000);
    }
  });

  whatsappBtn.addEventListener('click', () => {
    const whatsappMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919845106272?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    modal.remove();
  });

  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Auto-remove after 60 seconds
  setTimeout(() => {
    if (modal.parentNode) {
      modal.remove();
    }
  }, 60000);
};

export const validateRequiredFields = (formData, requiredFields) => {
  const errors = {};

  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  });

  return errors;
};

export const validateFormData = (formData, validationRules) => {
  const errors = {};

  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];

    if (rules.required && (!value || value.trim() === '')) {
      errors[field] = rules.required;
    } else if (value && rules.email && !validateEmail(value)) {
      errors[field] = 'Please enter a valid email address';
    } else if (value && rules.phone && !validatePhone(value)) {
      errors[field] = 'Please enter a valid phone number';
    }
  });

  return errors;
};

export const createWhatsAppMessage = (formData, formType) => {
  let message = `Hi! I would like to ${formType} from Pinnacle Thrive Coaching.\n\n`;

  // Add form-specific fields
  Object.keys(formData).forEach(key => {
    if (formData[key] && formData[key].trim() !== '') {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      message += `${label}: ${formData[key]}\n`;
    }
  });

  message += `\nPlease contact me at your convenience. Thank you!`;

  return encodeURIComponent(message);
};

export const openWhatsApp = (message) => {
  const whatsappUrl = `https://wa.me/919845106272?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
