function nav(id, index) {
          const pages = document.querySelectorAll('.page');
          const items = document.querySelectorAll('.nav-item');
          pages.forEach((p, i) => {
            p.classList.remove('active', 'off-top', 'off-bottom');
            if (i < index) p.classList.add('off-top');
            if (i > index) p.classList.add('off-bottom');
          });
          document.getElementById(id).classList.remove('off-top', 'off-bottom');
          document.getElementById(id).classList.add('active');
          items.forEach(item => item.classList.remove('active'));
          items[index].classList.add('active');
        }
