var app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        title: "Морква Нантська",
        short_text: "Класичний сорт моркви з соковитими коренеплодами",
        image: "images/carrot1.jpg",
        desc: "Нантська — один з найпопулярніших сортів моркви. Коренеплоди циліндричні, довжиною 16–20 см, яскраво-помаранчеві, соковиті та солодкі. Відмінно підходить для свіжого вживання та зберігання.",
      },
      {
        id: 2,
        title: "Морква Шантане",
        short_text: "Великі конічні коренеплоди відмінного смаку",
        image: "images/carrot2.jpg",
        desc: "Шантане — великоплідний сорт з конічними коренеплодами довжиною до 20 см. Відрізняється високою врожайністю та відмінними смаковими якостями. Добре переносить зберігання.",
      },
      {
        id: 3,
        title: "Морква Флакке",
        short_text: "Довгі коренеплоди для промислового вирощування",
        image: "images/carrot3.jpg",
        desc: "Флакке — пізньостиглий сорт з довгими веретеноподібними коренеплодами до 25 см. Має насичений помаранчевий колір і високий вміст каротину. Ідеально підходить для промислового вирощування.",
      },
      {
        id: 4,
        title: "Морква Берлікумер",
        short_text: "Ранньостиглий сорт з відмінною лежкістю",
        image: "images/carrot4.jpg",
        desc: "Берлікумер — ранньостиглий сорт моркви з циліндричними рівними коренеплодами. Вирізняється відмінною лежкістю та транспортабельністю. Має гарний товарний вигляд і солодкий смак.",
      },
      {
        id: 5,
        title: "Морква Каротель",
        short_text: "Короткі округлі коренеплоди для дрібних ділянок",
        image: "images/carrot5.jpg",
        desc: "Каротель — скоростиглий сорт з короткими циліндрично-округлими коренеплодами до 12 см. Відрізняється дуже солодким смаком та високим вмістом цукрів. Підходить для вирощування на важких ґрунтах.",
      },
    ],
    product: [],
    btnVisible: 0,
  },
  mounted() {
    this.getProduct();
    this.checkInCart();
  },
  methods: {
    getProduct() {
      var hash = window.location.hash;
      if (hash) {
        var id = parseInt(hash.replace("#", ""));
        var found = this.products.find(function (p) {
          return p.id === id;
        });
        if (found) {
          this.product = found;
        }
      }
    },
    addToCart(id) {
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (!cart.includes(id)) {
        cart.push(id);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.btnVisible = 1;
    },
    checkInCart() {
      var hash = window.location.hash;
      if (hash) {
        var id = parseInt(hash.replace("#", ""));
        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.includes(id)) {
          this.btnVisible = 1;
        }
      }
    },
  },
});
