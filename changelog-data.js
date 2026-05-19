export const changelogEntries = [
  {
    version: "2.8.5",
    label: "Latest published notes",
    summary: "Security hardening, invoice fixes, and QR-related corrections.",
    updated: [
      "Security improvements and general enhancements.",
      "Minor fixes and small workflow improvements."
    ],
    fixed: [
      "Product stock history display.",
      "Customer display visibility when show price check screen is disabled in settings.",
      "RTL issues on the login page.",
      "Show invoice via URL flow.",
      "Invoice create error 500.",
      "QR printing for the ZATCA module.",
      "RTL issues when downloading invoice PDFs."
    ]
  },
  {
    version: "2.8",
    label: "Version listed on source site",
    summary: "The source changelog lists this release but does not currently publish itemized notes.",
    notes: [
      "No release details were published on the current BizSuite website at the time this page was built."
    ]
  },
  {
    version: "2.6",
    label: "Version listed on source site",
    summary: "The source changelog lists this release but does not currently publish itemized notes.",
    notes: [
      "No release details were published on the current BizSuite website at the time this page was built."
    ]
  },
  {
    version: "2.5.6",
    label: "Maintenance release",
    summary: "A focused fix release around rewards, COGS, POS behavior, and invoice layout alignment.",
    fixed: [
      "Redeem points values above 1,000 not saving correctly.",
      "Contact table column alignment when reward points are enabled.",
      "COGS formula corrected to opening stock plus purchases minus closing stock.",
      "Selling price group selection on POS now updates correctly when no price group is assigned after customer selection.",
      "Running restaurant orders now print KOT from show-invoice and print-invoice paths instead of printing an invoice.",
      "Footer totals alignment in the invoice list table."
    ]
  },
  {
    version: "2.5",
    label: "Feature release",
    summary: "Expanded POS visibility, better customer display detail, and performance work across the POS flow.",
    added: [
      "COGS in the profit and loss report.",
      "Remaining product stock display on the POS screen.",
      "Product image display on the POS screen.",
      "Repair module data header on the login page."
    ],
    updated: [
      "Customer display now shows more order details, including totals, order tax, and modifiers.",
      "Product add speed on the POS screen.",
      "POS screen load time.",
      "Profit and loss reporting.",
      "POS screen layout."
    ],
    fixed: [
      "App update version not changing correctly.",
      "Edit and update flow for modifiers.",
      "Dark mode layout issues."
    ]
  },
  {
    version: "2.4",
    label: "Feature release",
    summary: "Login protection, restaurant defaults, and a round of product, user, and POS fixes.",
    added: [
      "Google reCAPTCHA protection on the login screen.",
      "Enhanced footer in the main application.",
      "Light logo in the main sidebar for dark mode.",
      "Default order type selection in business settings for restaurant workflows.",
      "Optional required order type setting in business settings for restaurant workflows."
    ],
    updated: [
      "Variation handling on the product screen.",
      "Additional fields in the create and edit user modal.",
      "Business name fallback in the contact payment modal."
    ],
    fixed: [
      "Edit button on the user edit screen.",
      "Variation flow on the product screen.",
      "Dark mode layout issues.",
      "TODO button behavior on quick links.",
      "Item discount calculation on POS."
    ]
  },
  {
    version: "2.2",
    label: "Feature release",
    summary: "Restaurant printing, product labeling, printer settings, and a broad UI polish pass.",
    added: [
      "Print KOT option from the restaurant screen details button.",
      "Order status on running orders.",
      "Kitchen screen now receives only running orders.",
      "Custom labels on the product page.",
      "Print label action on products.",
      "Barcode settings in Settings > Barcodes.",
      "POS printer settings in Settings > Printers."
    ],
    updated: [
      "Menu scrollbar redesigned into a thin clickable scrollbar.",
      "Main header menus opening and closing behavior."
    ],
    fixed: [
      "Sidebar reports.",
      "Dark mode button behavior in the mobile layout.",
      "Fetching combo products.",
      "Menu scroll button behavior on mobile screens.",
      "Sending ledger via email.",
      "Location on edit product.",
      "Action button layout on the tax rates screen.",
      "Select control issues across the application.",
      "Action button layout across the application.",
      "Contact show layout.",
      "Edit button layout across the application."
    ]
  },
  {
    version: "2.1",
    label: "Feature release",
    summary: "Restaurant operations became much richer, with running orders, KOT, order types, and mobile POS refinements.",
    added: [
      "KOT (Kitchen Order Ticket).",
      "Order type selection on the POS page for dine-in, takeaway, and delivery.",
      "Visibility and management for combo product modifiers on the POS page.",
      "Combo modifiers on the product page.",
      "Running order modal with real-time updates, edit and modify options, KOT reprint, and pre-bill printing.",
      "Order notes before placing an order, reflected on KOT, invoice, and running orders.",
      "Expanded POS header dropdown with additional options.",
      "Restaurant settings to enable or disable order type, KOT, and running orders."
    ],
    updated: [
      "Dark theme control on mobile moved into a dropdown button.",
      "Repair attendance calendar todo in the main app header.",
      "Header logo removed on mobile screens.",
      "POS mobile layout updated to feel more like a mobile application.",
      "POS mobile layout set to fixed for better UX.",
      "Categories and brands layout improved for faster selection.",
      "Featured products layout.",
      "New mobile check library.",
      "Overall code improvements and optimizations."
    ],
    fixed: [
      "Invoice layout add button."
    ]
  },
  {
    version: "2.0",
    label: "Feature release",
    summary: "Major POS utility additions, invoice schemes, and screen-fit improvements.",
    added: [
      "Excel download for all products.",
      "Sell return on the POS screen.",
      "Expense entry on the POS screen.",
      "Calculator on the POS screen with keyboard input.",
      "Invoice schemes."
    ],
    updated: [
      "Product add and edit screen.",
      "Overall POS screen layout.",
      "POS screen layout to better fit the available screen space.",
      "POS screen product list.",
      "Currency exchange rate handling on the POS screen.",
      "Default data table entry behavior."
    ],
    fixed: [
      "Dashboard graph real-time update issue.",
      "Auto email notification sending issue.",
      "Data tables now show all entries correctly."
    ]
  },
  {
    version: "1.5",
    label: "Earlier release",
    summary: "Home screen expansion, reward points, invoice improvements, and a set of stability fixes.",
    added: [
      "New widgets on the home screen.",
      "Sales order support.",
      "Reward points.",
      "Settings interface improvements.",
      "Invoice preview email sending improvements."
    ],
    fixed: [
      "Media upload issue.",
      "Invoice edit issue affecting some users.",
      "Minor language issues.",
      "Invoice delete issues."
    ]
  },
  {
    version: "1.4",
    label: "Earlier release",
    summary: "Multi-currency support and a small bundle of account and misc fixes.",
    added: [
      "Support for the multi-currency module."
    ],
    fixed: [
      "Account issue.",
      "Miscellaneous fixes."
    ]
  }
];
