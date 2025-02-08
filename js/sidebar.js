document.addEventListener("DOMContentLoaded", function () {
    const sidebar = `
    <aside class="sidebar">
        <h3>АНГИЛАЛ</h3>
        <ul>
            <li>Men Have Skin Too</li>
            <li>New Product</li>
            <li>New Year Wishlist</li>
            <li>Special Offer</li>
            <li>Багц</li>
            <li>Бусад</li>
            <li>Маск</li>
            <li>Нүүр будаг</li>
            <li>Сормуусны будаг</li>
            <li>Хүүхэд</li>
            <li>Цэвэрлэгээ</li>
            <li>Тос</li>
        </ul>

        <section>
            <h4>Star rating</h4>
            <ul>
                <li><input type="checkbox"> 1 star</li>
                <li><input type="checkbox"> 2 stars</li>
                <li><input type="checkbox"> 3 stars</li>
                <li><input type="checkbox"> 4 stars</li>
                <li><input type="checkbox"> 5 stars</li>
            </ul>
        </section>

        <section>
            <h4>Брэнд</h4>
            <ul>
                <li><input type="checkbox"> All Natural</li>
                <li><input type="checkbox"> Be Plain</li>
                <li><input type="checkbox"> Beauty Of Joseon</li>
                <li><input type="checkbox"> BLIV:U</li>
                <li><input type="checkbox"> D'Alba</li>
                <li><input type="checkbox"> Dasique</li>
                <li><input type="checkbox"> Dr.Althea</li>
                <li><input type="checkbox"> Dr.Different</li>
                <li><input type="checkbox"> Fwee</li>
                <li><input type="checkbox"> Hamel</li>
                <li><input type="checkbox"> ILSO</li>
                <li><input type="checkbox"> Kaine</li>
                <li><input type="checkbox"> My Real Skin</li>
                <li><input type="checkbox"> Nineless</li>
                <li><input type="checkbox"> Numbuzin</li>
                <li><input type="checkbox"> Oldam</li>
                <li><input type="checkbox"> One Thing</li>
                <li><input type="checkbox"> Reason A Beauty</li>
                <li><input type="checkbox"> Roundlab</li>
                <li><input type="checkbox"> Rovectin</li>
                <li><input type="checkbox"> Soo Good</li>
                <li><input type="checkbox"> Teazen</li>
                <li><input type="checkbox"> Tir Tir</li>
                <li><input type="checkbox"> VT Cosmetics</li>
            </ul>
        </section>

        <section>
            <h4>Арьсны төрөл</h4>
            <ul>
                <li><input type="checkbox"> Тослог</li>
                <li><input type="checkbox"> Холимог</li>
                <li><input type="checkbox"> Хуурай</li>
                <li><input type="checkbox"> Эмзэг</li>
            </ul>
        </section>

        <section>
            <h4>Арьсны асуудал</h4>
            <ul>
                <li><input type="checkbox"> Батгатай арьс</li>
                <li><input type="checkbox"> Нөсөө толботой арьс</li>
                <li><input type="checkbox"> Нүхжилттэй арьс</li>
                <li><input type="checkbox"> Өнгөө алдсан арьс</li>
                <li><input type="checkbox"> Улайлттай арьс</li>
                <li><input type="checkbox"> Үрчлээтсэн арьс</li>
                <li><input type="checkbox"> Хэт тослогтой арьс</li>
            </ul>
        </section>
    </aside>
    `;

    document.querySelector(".container").insertAdjacentHTML("afterbegin", sidebar);
});
