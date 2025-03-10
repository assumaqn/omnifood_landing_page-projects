const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
console.log(currentYear);
const mobileNavEl = document.querySelector(".mobile-nav");
const HeaderEl = document.querySelector(".header");
mobileNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});
/************smooth scrolling behaviour */
// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//     if (link.classList.contains("main-nav-links"));
//     HeaderEl.classList.toggle("nav-open");
//   });
// });

///// (new way of ) implementing smooth scrolling
document.querySelectorAll(".main-nav-links").forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    // console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);
///////sticky-navigation/////
const HeroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const Ent = entries[0];
    if (!Ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (Ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(HeroSection);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
