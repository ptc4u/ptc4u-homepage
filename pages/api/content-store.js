/**
 * Persistent content store for tracking approved and published content
 * Uses file system for persistence across server restarts
 */

import fs from 'fs';
import path from 'path';

const CONTENT_STORE_FILE = path.join(process.cwd(), 'content-store.json');

// Initialize content store with persistent data
let contentStore = {
  approved: [],
  published: [],
  lastPublished: null,
  maxPublishedItems: 999, // Show all approved articles (removed 6-article limit)
  contentVersion: 0 // Version number to track content changes
};

// Load persistent content store on startup
function loadContentStore() {
  try {
    if (fs.existsSync(CONTENT_STORE_FILE)) {
      const data = fs.readFileSync(CONTENT_STORE_FILE, 'utf8');
      const loadedStore = JSON.parse(data);
      contentStore = { ...contentStore, ...loadedStore };
      console.log(`Loaded persistent content store: ${contentStore.approved.length} approved, ${contentStore.published.length} published`);
    } else {
      console.log('No content store file found - will use default content');
    }
  } catch (error) {
    console.error('Error loading content store:', error);
    // Reset to default if there's an error
    contentStore = {
      approved: [],
      published: [],
      lastPublished: null,
      maxPublishedItems: 999,
      contentVersion: 0
    };
  }
}

// Save content store to file system
function saveContentStore() {
  try {
    fs.writeFileSync(CONTENT_STORE_FILE, JSON.stringify(contentStore, null, 2));
    console.log(`Saved content store: ${contentStore.approved.length} approved, ${contentStore.published.length} published`);
  } catch (error) {
    console.error('Error saving content store:', error);
  }
}

// Load content store on module initialization
loadContentStore();

export function getContentStore() {
  return contentStore;
}

export function setApprovedContent(content) {
  contentStore.approved = content;
  saveContentStore();
}

export function setPublishedContent(content) {
  // Sort by date (newest first) and show all approved articles
  const sortedContent = content.sort((a, b) => new Date(b.date) - new Date(a.date));
  contentStore.published = sortedContent; // Show all articles, no limit
  contentStore.lastPublished = new Date().toISOString();
  saveContentStore();
}

export function addApprovedContent(newContent) {
  // Add new content to approved list
  const existingIndex = contentStore.approved.findIndex(item => item.id === newContent.id);
  
  if (existingIndex >= 0) {
    // Update existing content
    contentStore.approved[existingIndex] = newContent;
  } else {
    // Add new content
    contentStore.approved.push(newContent);
  }
  
  // Update published content with latest approved content
  const sortedApproved = contentStore.approved.sort((a, b) => new Date(b.date) - new Date(a.date));
  contentStore.published = sortedApproved; // Show all articles, no limit
  contentStore.lastPublished = new Date().toISOString();
  
  console.log(`Added approved content: ${newContent.id}. Total approved: ${contentStore.approved.length}, Published: ${contentStore.published.length}`);
  saveContentStore();
}

export function getApprovedContent() {
  return contentStore.approved;
}

export function getPublishedContent() {
  return contentStore.published;
}

export function getLastPublished() {
  return contentStore.lastPublished;
}

export function getMaxPublishedItems() {
  return contentStore.maxPublishedItems;
}

export function setMaxPublishedItems(max) {
  contentStore.maxPublishedItems = max;
  // Update published content to show all articles
  const sortedApproved = contentStore.approved.sort((a, b) => new Date(b.date) - new Date(a.date));
  contentStore.published = sortedApproved; // Show all articles, no limit
  saveContentStore();
}

export function clearAllContent() {
  contentStore.approved = [];
  contentStore.published = [];
  contentStore.lastPublished = null;
  console.log('Cleared all content from store');
  saveContentStore();
}

export function replaceAllContent(newContent) {
  // Completely replace all content
  contentStore.approved = [...newContent];
  contentStore.published = [...newContent].sort((a, b) => new Date(b.date) - new Date(a.date)); // Show all articles, no limit
  contentStore.lastPublished = new Date().toISOString();
  contentStore.contentVersion += 1; // Increment version to force refresh
  console.log(`Replaced all content with ${newContent.length} new articles. Version: ${contentStore.contentVersion}`);
  saveContentStore();
}

export function forceRefreshContent() {
  // Force refresh by incrementing version and clearing cache
  contentStore.contentVersion += 1;
  contentStore.lastPublished = new Date().toISOString();
  console.log(`Force refresh triggered. Version: ${contentStore.contentVersion}`);
  saveContentStore();
}

export function getContentVersion() {
  return contentStore.contentVersion;
}
