document.addEventListener("DOMContentLoaded", function () {
  
  const avatars = [
    "avatar1.gif",
    "avatar2.gif", 
    "avatar3.gif",
    "avatar4.gif",
    "avatar5.gif"
  ];
  
  const defaultAvatar = avatars[4];
  
  const data = {
    name: "thái tử seoul",
    avatar: defaultAvatar,
    desc: "2011, đếch biết sợ và thích bị ăn đòn.",
    social: [
        // ← Đã sửa thành hiện bảng game
      { icon: "fa-facebook-f", link: "https://www.facebook.com/haovjppro206/" },
      { icon: "fa-instagram", link: "https://www.instagram.com/ngojc.haoss/" },
      { icon: "fa-tiktok", link: "https://www.tiktok.com/@nguyenngochao2009chuppy" },
      { icon: "fa-discord", link: "https://discord.com/users/1099520246613815296" },
      { icon: "fa-heart", type: "game-info" },
      { icon: "fa-comment-dots", link: "https://ngl.link/_.ngnghao._2" }
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
              ${data.social.map(s => {
                if (s.type === "game-info") {
                  // Icon trái tim -> hiện bảng game
                  return `<li>
                    <a href="javascript:void(0)" onclick="toggleGameInfo()">
                      <i class="fas fa-heart" style="color: #000000 !important; filter: none !important;"></i>
                    </a>
                  </li>`;
                } else if (s.type === "copy") {
                  return `<li>
                    <a href="javascript:void(0)" class="copy-btn" onclick="copyDiscordUsername('${s.text}', this)">
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>`;
                } else if (s.icon === "fa-discord") {
                  return `<li>
                    <a href="javascript:void(0)"
                      onclick="
                        window.location.href='discord://-/users/1099520246613815296';
                        setTimeout(function(){
                          window.open('https://discord.com/users/1099520246613815296','_blank');
                        },1000);
                      ">
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>`;
                } else {
                  const iconClass = s.icon === 'fa-comment-dots' ? 'fas' : 'fab';
                  return `<li>
                    <a href="${s.link}" target="_blank">
                      <i class="${iconClass} ${s.icon}"></i>
                      ${s.name ? `<span style="font-size: 11px; margin-left: 5px;">${s.name}</span>` : ''}
                    </a>
                  </li>`;
                }
              }).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  const avatarImage = document.querySelector(".avatar .image");
  if (avatarImage) {
    avatarImage.style.backgroundImage = `url('${data.avatar}')`;
    avatarImage.style.backgroundSize = "cover";
    avatarImage.style.backgroundPosition = "center";
    avatarImage.style.backgroundRepeat = "no-repeat";
  }
});