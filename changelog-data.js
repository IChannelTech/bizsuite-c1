export const changelogEntries = [
  {
    version: "3.8",
    label: "Payments and POS fixes",
    summary: "Approve due payments arrived alongside a focused batch of dark mode, sales list, inventory, and POS fixes.",
    added: [
      "Approve due payments feature in Business Settings > Payments."
    ],
    fixed: [
      "Dark mode not loading after update for some users due to cache.",
      "Swal not loading on action buttons after recent action dropdown improvements, including product delete.",
      "Inventory management (Manage Stock) is now enabled by default for all businesses when custom plans are not enabled.",
      "Sales list loading issue when the Add Sale module is disabled.",
      "Units and subunits selection on POS rows.",
      "Price group change clearing the cart on the POS screen."
    ]
  },
  {
    version: "3.7",
    label: "Invoice builder and inventory release",
    summary: "This release adds invoice layout templates, stronger POS transaction safeguards, and a new internal inventory module.",
    added: [
      "CRN field on the customers page for ZATCA.",
      "Builder templates for dynamic layouts on the invoice layouts page.",
      "Payment method column on the product sell report.",
      "Client transaction ID on the POS screen with strict duplicate checking that returns the existing saved receipt instead of creating a new invoice.",
      "Inventory Management as an internal core module for the Manage Stock feature on the Add Product page."
    ],
    updated: [
      "Renamed the Due Date label to Pay Term across the app.",
      "Overall UI improvements across modules.",
      "Action dropdown menus on scroll-heavy pages now open upward or downward based on available space.",
      "Orders auto-refresh now refreshes the full waiter orders list correctly."
    ],
    fixed: [
      "Slider switches not toggling correctly on some pages.",
      "Large label text breaking layouts now truncates with ellipsis and reveals the full text on hover."
    ]
  },
  {
    version: "3.6",
    label: "Currencies and customer balance release",
    summary: "Rewards visibility, user import, payment note enforcement, and frontend currency management were introduced here.",
    added: [
      "Rewards points value on invoices.",
      "User import feature.",
      "Required payment note setting in Business Settings > Sales.",
      "Frontend currencies management at `posurl/app/currencies`.",
      "New Riyal currency symbol."
    ],
    updated: [
      "Added advance balance to customer imports.",
      "Added advance balance to the customer list page.",
      "Miscellaneous UI improvements.",
      "Updated the orders page layout for the built-in core Orders module."
    ]
  },
  {
    version: "3.5",
    label: "Reporting and invoice accuracy release",
    summary: "Filters, richer sales visibility, and a long list of invoice, discount, and transaction fixes define this release.",
    added: [
      "Payment method filter on the sales list.",
      "Assigned To filter on the contact list.",
      "Action column on the stock report with a link to product stock history.",
      "Max discount limit now works with fixed discount type on the discount modal.",
      "SKU display on invoice product rows in the create screen."
    ],
    updated: [
      "Profit and loss report.",
      "Invoice list rows now open the invoice info modal on click.",
      "POS sales list screen now includes more columns for deeper detail.",
      "Contact show screen.",
      "Invoice delete now reloads the data table.",
      "Activity log report.",
      "Overall UI fixes and improvements."
    ],
    fixed: [
      "Add Quotation page incorrectly showing the Add Sales heading.",
      "Discount percentage calculation.",
      "Timezone issues affecting date filters and sales timestamps throughout the app.",
      "Order discount on receipts.",
      "Background login page.",
      "Invoice total calculations, including tax calculations.",
      "Sell return tax calculations for line items.",
      "Contacts > Action > Invoices opening the ledger tab instead of invoices.",
      "Types of service not saving from the sales create screen.",
      "Custom fields throughout the application.",
      "Sell subscription invoice regeneration issue.",
      "Line total tax calculation on the POS screen.",
      "Transaction payment edit and delete errors."
    ],
    notes: [
      "Other miscellaneous fixes and improvements were also included throughout the application."
    ]
  },
  {
    version: "3.4",
    label: "Restaurant and real-time POS upgrade",
    summary: "Restaurant tooling, combo workflows, stricter discounts, and deeper real-time POS support landed in a wide-ranging release.",
    added: [
      "Support for the Advance Restaurant Management System module.",
      "Improved sleek layout for the POS screen.",
      "Combo modifiers for selling combo products, including combo item modifier selection.",
      "New product search bar on product stock history.",
      "Maximum discount validation for line items and total order discounts in Business Settings > POS."
    ],
    updated: [
      "Product stock history now uses color codes for quantities.",
      "Added modifiers and combo modifiers to the product sell report.",
      "Added modifiers and combo modifiers to the GST sales report.",
      "Product sale report now defaults to date ordering.",
      "Dashboard net sales calculation now uses gross sales minus dues minus expense.",
      "Running order modal now supports improved grid, list, and card layouts.",
      "Real-time POS logic improved, including better feature toggling behavior.",
      "Modifiers and combo modifiers on legacy POS product rows.",
      "Added product summary on the cash register modal.",
      "Added expense note on the expense list screen.",
      "Dashboard chart dates now support the selected language.",
      "Dashboard charts now support RTL for Arabic.",
      "Cash register report close icon updated.",
      "POS edit screen now supports real-time POS.",
      "Legacy product row and modifier layouts now align with the real-time POS layout.",
      "Added delivery note action on sell and POS lists.",
      "Updated Saudi Arabia's currency symbol.",
      "Customer display now fully supports modifiers and combo modifiers."
    ],
    fixed: [
      "Tax calculation rounding issue on the POS screen.",
      "Login background image now covers the full screen.",
      "Subtotal on invoice and database values for modifiers and combo modifiers.",
      "Product sales reports now correctly include modifiers, combo items, and combo modifiers.",
      "Sale representative report payment status modal not opening on click.",
      "Dashboard chart end-of-month dates and months.",
      "POS edit screen layout now matches the create screen.",
      "Quick product add bypassing user and subscription quota limits.",
      "New users modal now enforces package quota restriction.",
      "Quick Add Products modal now includes package quota restriction."
    ]
  },
  {
    version: "3.3",
    label: "Realtime POS and verification release",
    summary: "Realtime barcode scanning, product syncing controls, OTP email verification, and reporting fixes headline this update.",
    added: [
      "Real-time barcode scanning and product suggestions on the POS screen.",
      "Enable, disable, and configure real-time product data syncing from app settings.",
      "Email verification via OTP instead of verification links.",
      "Enable Instant POS on both business level and POS screen level."
    ],
    updated: [
      "Added Maldivian Rufiyaa (MVR) as a supported currency.",
      "Improved layout and usability of the Documents and Notes section.",
      "Enhanced dark mode theme for better consistency and readability.",
      "Improved the overall application theme with a cleaner modern design.",
      "Added a Google Map contact section.",
      "Added a dedicated bulk price update page for product pricing management.",
      "Added opening and closing stock details to the profit and loss report.",
      "Streamlined logo placement and sizing across the application."
    ],
    fixed: [
      "Profit by Invoice report failing to load.",
      "Profit by Date report not loading because of a data filtering error.",
      "Recaptcha now requires both site key and secret key when enabled to prevent accidental lockout.",
      "Invoice scheme numbering now starts from 1 by default and no longer allows zero.",
      "Date and time filter in the Product Sell Report when grouped by category or brand."
    ]
  },
  {
    version: "3.1",
    label: "Security and customer display release",
    summary: "Security expanded with 2FA, brute-force protection, maintenance mode, and social login support, while the customer display received a major refresh.",
    added: [
      "Two-factor authentication (2FA).",
      "Background image for the login page.",
      "Language settings for the header.",
      "Social logins.",
      "Brute force protection.",
      "Maintenance mode."
    ],
    updated: [
      "Brand-new customer display screen with real-time updates and advertisement support.",
      "Overall UI improvements."
    ]
  },
  {
    version: "3.0.1",
    label: "UI and language polish",
    summary: "A small follow-up release focused on RTL support, dark mode polish, language expansion, and quotation conversion fixes.",
    updated: [
      "RTL mode.",
      "Dark mode.",
      "Added Swahili language support.",
      "Overall design and layout."
    ],
    fixed: [
      "Quotation not showing when converted to proforma."
    ]
  },
  {
    version: "3.0",
    label: "Dashboard and theming release",
    summary: "This version introduced stronger theming controls, homepage improvements, a new utility for purchase and sell mismatches, and several invoice and data fixes.",
    added: [
      "Color scheme changer.",
      "Login page background image.",
      "Purchase Sell Mismatch Fix utility."
    ],
    updated: [
      "Added tax rates to the profile settings dropdown.",
      "Improved the custom date range picker.",
      "Improved the homepage layout with a Financial Year Sales Chart and additional widgets.",
      "Improved input form field and select option layouts.",
      "Improved Add and Edit Invoice Layout alignment.",
      "Updated datatable buttons with better styling."
    ],
    fixed: [
      "Letterhead not saving.",
      "Date issue in Add Sell."
    ],
    notes: [
      "Miscellaneous fixes and improvements were also applied throughout the application."
    ]
  },
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
