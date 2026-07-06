document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = `
    <div class="image-modal-backdrop"></div>
    <div class="image-modal-dialog">
      <button class="image-modal-close" type="button" aria-label="Close image preview">×</button>
      <img class="image-modal-image" src="" alt="" />
    </div>
  `;

  document.body.appendChild(modal);

  const imageElement = modal.querySelector('.image-modal-image');
  const closeButton = modal.querySelector('.image-modal-close');

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  const openModal = (src, alt) => {
    imageElement.src = src;
    imageElement.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  document.querySelectorAll('img.clickable-image').forEach((image) => {
    image.addEventListener('click', () => {
      const src = image.getAttribute('src');
      openModal(src, image.getAttribute('alt') || '');
    });
  });

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('image-modal-backdrop')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
