const header = document.querySelector("[data-nav]");
const toggle = document.querySelector(".menu-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

let revealObserver;

const applyReveal = (scope = document) => {
  const revealItems = [
    ...scope.querySelectorAll(
      ".hero-copy, .hero-product, .product-window, .proof-card, .split-copy, .phone-panel, .module-card, .timeline-card, .pricing-card, .pricing-note, details, .cta-band, .changelog-entry, .changelog-hero-copy, .changelog-hero-meta"
    )
  ];

  revealItems.forEach((item, index) => {
    item.classList.add("revealable");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`);
  });

  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
  }

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      revealObserver.observe(item);
    }
  });
};

window.applyBizSuiteReveal = applyReveal;

const phoneCard = document.querySelector(".phone-card");

if (phoneCard) {
  phoneCard.innerHTML = `
    <div class="phone-head">
      <div>
        <span>POS checkout</span>
        <small>Cashier: Ada &bull; Table 04</small>
      </div>
      <strong>&#8358;18,750</strong>
    </div>
    <div class="pos-meta">
      <span>Invoice #1058</span>
      <span>12:42 PM</span>
    </div>
    <label class="search-line">
      <span>Search item or scan barcode</span>
    </label>
    <div class="product-list">
      <span><i>2x Rice pack</i><em>&#8358;8,400</em></span>
      <span><i>Repair service</i><em>&#8358;9,500</em></span>
      <span><i>Delivery</i><em>&#8358;850</em></span>
    </div>
    <div class="pos-summary">
      <span>Subtotal <em>&#8358;18,750</em></span>
      <span>Tax <em>&#8358;0</em></span>
      <strong>Total <em>&#8358;18,750</em></strong>
    </div>
    <div class="payment-row" aria-label="Payment methods">
      <span class="active">Cash</span>
      <span>Transfer</span>
      <span>Card</span>
    </div>
    <button type="button">Complete Sale</button>
  `;
}

const pricingSection = document.querySelector("#pricing");

if (pricingSection) {
  const pricingGrid = pricingSection.querySelector(".pricing-grid");
  const pricingNote = pricingSection.querySelector(".pricing-note");
  const pricingToggles = [...pricingSection.querySelectorAll("[data-pricing-toggle]")];

  const plans = [
    {
      kicker: "For lean teams",
      name: "BizSuite Core Basic",
      description: "For owners and compact operations who want dependable daily business control.",
      featured: false,
      monthly: {
        price: "&#8358;15,000.00",
        cycle: "/ month",
        caption: "Unlimited customers, unlimited invoices, essential workflows.",
        cta: "https://app.bizsuite.com.ng/business/register?package=4",
        features: [
          "2 Business Locations",
          "3 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Essentials Module"
        ]
      },
      yearly: {
        price: "&#8358;180,000.00",
        cycle: "/ year",
        caption: "Annual billing for the same core setup and operational essentials.",
        cta: "https://app.bizsuite.com.ng/business/register?package=7",
        features: [
          "2 Business Locations",
          "3 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Essentials Module"
        ]
      }
    },
    {
      kicker: "Most chosen",
      name: "BizSuite Core Plus",
      description: "For growing businesses that need accounting structure and repair operations in one stack.",
      featured: true,
      monthly: {
        price: "&#8358;25,000.00",
        cycle: "/ month",
        caption: "Unlimited customers, unlimited invoices, accounting and repair support.",
        cta: "https://app.bizsuite.com.ng/business/register?package=5",
        features: [
          "3 Business Locations",
          "3 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Accounting Module",
          "Essentials Module",
          "Repair Module"
        ]
      },
      yearly: {
        price: "&#8358;300,000.00",
        cycle: "/ year",
        caption: "Annual billing for growing teams that need stronger finance and service flows.",
        cta: "https://app.bizsuite.com.ng/business/register?package=8",
        features: [
          "3 Business Locations",
          "3 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Accounting Module",
          "Essentials Module",
          "Repair Module"
        ]
      }
    },
    {
      kicker: "For scaling operators",
      name: "BizSuite Core Advance",
      description: "For multi-team businesses that need richer sales, CRM, connector, and commerce capability.",
      featured: false,
      monthly: {
        price: "&#8358;44,000.00",
        cycle: "/ month",
        caption: "Unlimited customers, unlimited invoices, CRM and commerce-ready operations.",
        cta: "https://app.bizsuite.com.ng/business/register?package=6",
        features: [
          "4 Business Locations",
          "10 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Accounting Module",
          "Crm Module",
          "Essentials Module",
          "Repair Module",
          "WooCommerce Module"
        ]
      },
      yearly: {
        price: "&#8358;528,000.00",
        cycle: "/ year",
        caption: "Annual billing for multi-team businesses with added connector capability.",
        cta: "https://app.bizsuite.com.ng/business/register?package=9",
        features: [
          "4 Business Locations",
          "10 Users",
          "Unlimited Products",
          "Unlimited Invoices",
          "Accounting Module",
          "Connector Module",
          "Crm Module",
          "Essentials Module",
          "Repair Module",
          "WooCommerce Module"
        ]
      }
    }
  ];

  let billing = "monthly";

  const renderPricing = () => {
    pricingGrid.innerHTML = plans
      .map((plan) => {
        const bill = plan[billing];
        const featureItems = bill.features.map((feature) => `<li>${feature}</li>`).join("");
        const classes = plan.featured ? "pricing-card featured-plan" : "pricing-card";

        return `
          <article class="${classes}">
            ${plan.featured ? '<span class="plan-ribbon">Best fit for growing teams</span>' : ""}
            <p class="plan-kicker">${plan.kicker}</p>
            <h3>${plan.name}</h3>
            <p>${plan.description}</p>
            <strong><span>${bill.price}</span> <small>${bill.cycle}</small></strong>
            <p class="plan-caption">${bill.caption}</p>
            <ul>${featureItems}</ul>
            <a class="button ${plan.featured ? "button-dark" : "button-outline"}" href="${bill.cta}">Register &amp; Subscribe</a>
          </article>
        `;
      })
      .join("");

    if (pricingNote) {
      pricingNote.innerHTML = `
        <p>${billing === "monthly"
          ? "Monthly view shows the live one-month plan pricing from BizSuite. Switch to yearly for annual billing."
          : "Yearly view shows the live one-year plan pricing from BizSuite. Explore the full pricing catalog for more package options."}</p>
        <a class="button button-soft" href="https://app.bizsuite.com.ng/pricing">View Other BizSuite Plans</a>
      `;
    }

    pricingToggles.forEach((button) => {
      const isActive = button.dataset.pricingToggle === billing;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    applyReveal(pricingSection);
  };

  pricingToggles.forEach((button) => {
    button.addEventListener("click", () => {
      billing = button.dataset.pricingToggle;
      renderPricing();
    });
  });

  renderPricing();
}

applyReveal();

requestAnimationFrame(() => {
  document.documentElement.classList.add("effects-ready");
});
