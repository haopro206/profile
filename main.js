document.addEventListener("DOMContentLoaded", function () {
  const data = {
    avatar: "assets/avatar.jpg",
    name: "DANG DUY HUNG",
    desc: "Wer einen Grund zum Leben hat, erträgt fast jedes Wie.",
    social: [
      { url: "https://facebook.com", icon: "fa-facebook-f" },
      { url: "https://instagram.com", icon: "fa-instagram" },
      { url: "https://t.me", icon: "fa-telegram" },
      { url: "https://tiktok.com", icon: "fa-heart" }
    ]
  };

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="wrap">
      <div class="container">
        <div class="home">
          <div class="avatar">
            <div class="image" style="background-image: url('${data.avatar}')"></div>
          </div>
          <div class="details">
            <h3 class="name">${data.name}</h3>
            <p class="excerpt">${data.desc}</p>
            <ul class="social">
              ${data.social.map(s => `
                <li>
                  <a href="${s.url}" target="_blank">
                    <i class="fab ${s.icon}"></i>
                  </a>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
});