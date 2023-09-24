// main.js

import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";

// Wrap your code in a DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', () => {
  // This code will run when the HTML content is fully loaded

  function showTabContent(tabId, content) {
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
      tab.style.display = 'none';
    }
    document.getElementById(tabId).innerHTML = content;
    document.getElementById(tabId).style.display = 'block';
  }

  // Add click event listeners to tab buttons
  document.getElementById('homeButton').addEventListener('click', () => {
    showTabContent('homeTab', homeContent);
  });

  document.getElementById('menuButton').addEventListener('click', () => {
    showTabContent('menuTab', menuContent);
  });

  showTabContent("homeTab", homeContent);
});
