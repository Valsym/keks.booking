const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const Avatar = {
  WIDTH: 40,
  HEIGHT: 44,
}

const Photo = {
  WIDTH: 70,
  HEIGHT: 70,
}

const userForm = document.querySelector('.ad-form');
const avatarChooser = userForm.querySelector('#avatar')//'.ad-form__field');
const avatarPreviewContainer = userForm.querySelector('.ad-form-header__preview');
const avatarUploadPreview = avatarPreviewContainer.querySelector('img');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  console.log(fileName);
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarUploadPreview.src = reader.result;
      avatarUploadPreview.width = Avatar.WIDTH;
      avatarUploadPreview.height = Avatar.HEIGHT;
    });

    reader.readAsDataURL(file);
  }
});

const fileChooser = userForm.querySelector('#images')//'.ad-form__field');
const filePreviewContainer = userForm.querySelector('.ad-form__photo');
const img = document.createElement('img');

img.src = 'img/muffin-grey.svg';
img.alt = 'Превью жилья';
img.width = Photo.WIDTH;
img.height = Photo.HEIGHT;

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    const filePreview = filePreviewContainer.appendChild(img);
    reader.addEventListener('load', () => {
      filePreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

export { filePreviewContainer }
