import { changelogEntries } from "./changelog-data.js";

const listRoot = document.querySelector("[data-changelog-list]");
const panelRoot = document.querySelector("[data-changelog-panels]");
const summaryRoot = document.querySelector("[data-changelog-summary]");
const emptyState = "No release notes were provided for this version.";

if (listRoot && panelRoot && summaryRoot) {
  const sectionOrder = ["added", "updated", "fixed", "notes"];
  const sectionTitles = {
    added: "Added",
    updated: "Updated",
    fixed: "Fixed",
    notes: "Notes"
  };

  listRoot.innerHTML = "";
  panelRoot.innerHTML = "";
  summaryRoot.textContent = `${changelogEntries.length} releases captured from BizSuite changelog sources.`;

  changelogEntries.forEach((entry, index) => {
    const itemButton = document.createElement("button");
    itemButton.type = "button";
    itemButton.className = "changelog-nav-item";
    itemButton.dataset.version = entry.version;
    itemButton.setAttribute("aria-selected", String(index === 0));
    itemButton.innerHTML = `
      <strong>v${entry.version}</strong>
      <span>${entry.label}</span>
    `;
    listRoot.appendChild(itemButton);

    const article = document.createElement("article");
    article.className = "changelog-entry";
    article.dataset.version = entry.version;
    article.hidden = index !== 0;

    const sections = sectionOrder
      .filter((key) => Array.isArray(entry[key]) && entry[key].length > 0)
      .map((key) => {
        const items = entry[key].map((item) => `<li>${item}</li>`).join("");
        return `
          <section class="changelog-group">
            <h3>${sectionTitles[key]}</h3>
            <ul>${items}</ul>
          </section>
        `;
      })
      .join("");

    article.innerHTML = `
      <div class="changelog-entry-head">
        <div>
          <p class="eyebrow">Version ${entry.version}</p>
          <h2>${entry.label}</h2>
        </div>
        <span class="changelog-badge">${entry.version}</span>
      </div>
      <p class="changelog-entry-summary">${entry.summary}</p>
      ${sections || `<p class="changelog-empty">${emptyState}</p>`}
    `;
    panelRoot.appendChild(article);
  });

  const setActiveVersion = (version) => {
    listRoot.querySelectorAll(".changelog-nav-item").forEach((button) => {
      const isActive = button.dataset.version === version;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    panelRoot.querySelectorAll(".changelog-entry").forEach((entry) => {
      entry.hidden = entry.dataset.version !== version;
    });

    if (window.location.hash !== `#v-${version}`) {
      history.replaceState(null, "", `#v-${version}`);
    }
  };

  listRoot.addEventListener("click", (event) => {
    const button = event.target.closest(".changelog-nav-item");
    if (!button) {
      return;
    }
    setActiveVersion(button.dataset.version);
  });

  const initialVersion = window.location.hash.startsWith("#v-")
    ? window.location.hash.replace("#v-", "")
    : changelogEntries[0].version;
  const activeExists = changelogEntries.some((entry) => entry.version === initialVersion);
  setActiveVersion(activeExists ? initialVersion : changelogEntries[0].version);

  window.applyBizSuiteReveal?.(document);
}
