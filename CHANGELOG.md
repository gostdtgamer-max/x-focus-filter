# Changelog

## [1.2.0] - 2026-03-22

### Added
- **Options page** — full settings page with built-in category keyword viewer, custom category CRUD, import/export
- **Custom categories** — create your own keyword groups to extend filtering
- **Keyword visibility** — view all keywords in each built-in category (read-only, expandable)
- **Import/Export** — backup and restore config as JSON file
- **Floating badge toggle** — show/hide the status badge from options page
- **Ad filtering** — automatically detect and hide promoted/ad tweets
- **Hide reason display** — peek mode now shows why each tweet was hidden (e.g. "blacklist: nsfw", "no match")
- **Gear icon** in popup header to open options page

### Changed
- `shouldShowTweet` now returns reason info for better debugging
- Popup `doSave` preserves options page settings (showBadge, filterAds, customCategories)
- Version bumped to 1.2.0
