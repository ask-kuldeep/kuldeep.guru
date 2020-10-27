document.addEventListener('DOMContentLoaded', () => {
  const count = () => {
    fetch('/.netlify/functions/count')
      .then((response) => response.text())
      .then((data) => {
        data = JSON.parse(data);
        if (!data.success) {
          count();
        }
      });
  };

  count();
});
