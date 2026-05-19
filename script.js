const header = document.querySelector("[data-nav]");
const toggle = document.querySelector(".menu-toggle");

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
  };

  pricingToggles.forEach((button) => {
    button.addEventListener("click", () => {
      billing = button.dataset.pricingToggle;
      renderPricing();
    });
  });

  renderPricing();
}
