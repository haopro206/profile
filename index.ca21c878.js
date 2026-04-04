document.addEventListener("DOMContentLoaded", function () {
  const data = {
    name: "NGUYEN NGOC HAO",
    avatar: "avatar.jpg",  // ← ĐỔI LẠI ĐƯỜNG DẪN ĐÚNG CỦA BẠN
    desc: "2011, quê Thanh Hóa, đếch biết sợ và thjch bị ăn đòn",
    social: [
      { icon: "fa-facebook-f", link: "https://www.facebook.com/haovjppro206/" },
      { icon: "fa-instagram", link: "https://www.instagram.com/_.ngnghao._/" },
    
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
            <div class="name-box">
              <div class="avatar-small"></div>
              <h3 class="name">${data.name}</h3>
            </div>
            <p class="excerpt">${data.desc}</p>
            <ul class="social">
              ${data.social.map(s => `
                <li>
                  <a href="${s.link}" target="_blank">
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

  // Set avatar cho ảnh lớn
  const avatarImage = document.querySelector(".avatar .image");
  if (avatarImage) {
    avatarImage.style.backgroundImage = `url('${data.avatar}')`;
    avatarImage.style.backgroundSize = "cover";
    avatarImage.style.backgroundPosition = "center";
    avatarImage.style.backgroundRepeat = "no-repeat";
    console.log("Đã set avatar:", data.avatar); // Kiểm tra log
  } else {
    console.log("Không tìm thấy .avatar .image");
  }

  // Set avatar cho ảnh nhỏ
  const smallAvatar = document.querySelector(".avatar-small");
  if (smallAvatar) {
    smallAvatar.style.backgroundImage = `url('${data.avatar}')`;
    smallAvatar.style.backgroundSize = "cover";
    smallAvatar.style.backgroundPosition = "center";
  }
});