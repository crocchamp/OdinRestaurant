// main.js

import { homeContent } from "../home.js";
import { menuContent } from "../menu.js";

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


  