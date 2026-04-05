document.addEventListener("DOMContentLoaded", function () {
  const data = {
    name: "Nguyễn Ngọc Hảo",
    avatar: "avatar.jpg",
    desc: "2011, đếch biết sợ và thích bị ăn đòn",
    social: [
      { icon: "fa-facebook-f", link: "https://www.facebook.com/haovjppro206/" },
      { icon: "fa-instagram", link: "https://www.instagram.com/_.ngnghao._/" },
      { icon: "fa-comment-dots", link: "https://ngl.link/_.ngnghao._2", },  // Có icon + chữ ngl
      { icon: "fa-tiktok", link: "https://www.tiktok.com/@nnhchechou" }
    ]
  };

  document.title = data.name;

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="wrap">
      <div class="container">
        <div class="home">
          <div class="avatar">
            <div class="image"></div>
          </div>
          <div class="details">
            <h3 class="name">${data.name}</h3>
            <p class="excerpt">${data.desc}</p>
            <ul class="social">
              ${data.social.map(s => `
                <li>
                  <a href="${s.link}" target="_blank">
                    <i class="${s.icon === 'fa-comment-dots' ? 'fas' : 'fab'} ${s.icon}"></i>
                    ${s.name ? `<span style="font-size: 11px; margin-left: 5px;">${s.name}</span>` : ''}
                  </a>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Set avatar
  const avatarImage = document.querySelector(".avatar .image");
  if (avatarImage) {
    avatarImage.style.backgroundImage = `url('${data.avatar}')`;
    avatarImage.style.backgroundSize = "cover";
    avatarImage.style.backgroundPosition = "center";
    avatarImage.style.backgroundRepeat = "no-repeat";
  }
});