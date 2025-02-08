document.addEventListener("DOMContentLoaded", function () {
    const footer = `
    <footer>
        <div class="footer-container">
            <!-- Left Section: Contact Information -->
            <div class="footer-section">
                <h2>XZAYA</h2>
                <h3>ХОЛБОО БАРИХ</h3>
                <p>📞 95899691</p>
                <p>📧 <a href="mailto:info@xzaya.mn">info@xzaya.mn</a></p>
                <p>📍 Khan uul district, 15th khoroo, Chingis Avenue street, 33/1-1108, Ulaanbaatar, Mongolia</p>
            </div>

            <!-- Middle Section: Helpful Information -->
            <div class="footer-section">
                <h3>ТУСЛАМЖ МЭДЭЭЛЭЛ</h3>
                <ul>
                    <li><a href="#">Түгээмэл асуулт хариулт</a></li>
                    <li><a href="#">Үйлчилгээний нөхцөл</a></li>
                    <li><a href="#">Бидэнтэй нэгдээрэй</a></li>
                    <li><a href="#">Холбоо барих</a></li>
                </ul>
            </div>

            <!-- Right Section: About Us -->
            <div class="footer-section">
                <h3>БИДНИЙ ТУХАЙ</h3>
                <ul>
                    <li><a href="#">Бид хэн бэ?</a></li>
                    <li><a href="#">Үйл ажиллагаа</a></li>
                    <li><a href="#">Тээвэрлэлтний талаар</a></li>
                </ul>

                <!-- Social Media Icons -->
                <div class="social-icons">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                    <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                    <a href="#"><img src="tiktok-icon.png" alt="TikTok"></a>
                    <a href="#"><img src="youtube-icon.png" alt="YouTube"></a>
                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="footer-bottom">
            <p>© 2024 Xzaya. Бүх эрх хуулиар хамгаалагдсан.</p>
            <p>Вэб сайтын талаар санал хүсэлт байвал <a href="#">бидэнд мэдэгдээрэй.</a></p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footer);
});
