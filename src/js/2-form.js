const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email && parsedData.message) {
      formData.email = parsedData.email;
      formData.message = parsedData.message;
      form.email.value = formData.email;
      form.message.value = formData.message;
    }
  } catch (error) {
    console.error('Failed to parse saved data:', error);
    localStorage.removeItem('feedback-form-state');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  console.log({ email, message });

  form.reset();
  localStorage.removeItem('feedback-form-state');
});

form.addEventListener('input', e => {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();

  if (formData.email || formData.message) {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});
