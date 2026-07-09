const BASE_SPRITES = [
  { key: 'water', name: 'Water', rarity: 'Rare', element: 'Water', icon: '💧', ability: 'Replenishes shields while standing in water for you and nearby squad.', dust: 100, drop: '8.73%', source: 'Sprite Chests + standard chests' },
  { key: 'earth', name: 'Earth', rarity: 'Rare', element: 'Earth', icon: '🌿', ability: 'Increases your chance of finding rare items in chests.', dust: 100, drop: '≈13–14%', source: 'Sprite Chests + standard chests' },
  { key: 'fire', name: 'Fire', rarity: 'Rare', element: 'Fire', icon: '🔥', ability: 'Creates a fiery burst after dealing enough damage to an enemy.', dust: 100, drop: '~13.92%', source: 'Sprite Chests + standard chests' },
  { key: 'fishy', name: 'Fishy', rarity: 'Rare', element: 'Water', icon: '🐟', ability: 'Greatly increases swim speed. Taking damage grants a brief movement speed boost.', dust: 100, drop: '~13.79%', source: 'Fishing + Sprite loot sources' },
  { key: 'air', name: 'Air', rarity: 'Rare', element: 'Air', icon: '🌪️', ability: 'Mobility-focused Sprite from the active Sprite pool.', dust: 100, drop: 'Community estimate', source: 'Sprite Chests + standard chests' },

  { key: 'duck', name: 'Duck', rarity: 'Epic', element: 'Utility', icon: '🦆', ability: 'Emoting or jamming replenishes your shields.', dust: 3000, drop: '~5.22%', source: 'Sprite Chests + standard chests' },
  { key: 'ghost', name: 'Ghost', rarity: 'Epic', element: 'Stealth', icon: '👻', ability: 'Makes you temporarily invisible while reloading.', dust: 3000, drop: '≈5%', source: 'Sprite Chests + standard chests' },
  { key: 'demon', name: 'Demon', rarity: 'Epic', element: 'Siphon', icon: '😈', ability: 'Siphons some Health and Shield when you eliminate an opponent.', dust: 3000, drop: '~5.22%', source: 'Sprite Chests + standard chests' },
  { key: 'king', name: 'King', rarity: 'Epic', element: 'Melee', icon: '👑', ability: 'Increases Pickaxe damage.', dust: 3000, drop: '≈5%', source: 'Sprite Chests + standard chests' },
  { key: 'aura', name: 'Aura', rarity: 'Epic', element: 'Movement', icon: '✨', ability: 'Grants Shock Rock charges after dealing damage.', dust: 3000, drop: '≈5%', source: 'Sprite Chests + standard chests' },
  { key: 'striker', name: 'Striker', rarity: 'Epic', element: 'Movement', icon: '⚽', ability: 'Activates Overdrive after mantling, hurdling, or wall scrambling.', dust: 3000, drop: '≈5%', source: 'Soccer Pitch goal + Sprite loot sources' },
  { key: 'seven', name: 'Seven', rarity: 'Epic', element: 'Special', icon: '⑦', ability: 'Special Chapter 7 themed Sprite from the active collection.', dust: 3000, drop: 'Community estimate', source: 'Sprite Chests + standard chests' },

  { key: 'dream', name: 'Dream', rarity: 'Legendary', element: 'Loot', icon: '🌙', ability: 'Gives a random item each level, with legendary loot awarded at Level 5.', dust: 5000, drop: '≈2–2.6%', source: 'Sprite Chests + standard chests' },
  { key: 'punk', name: 'Punk', rarity: 'Legendary', element: 'Ammo', icon: '🎸', ability: 'Grants random bonuses, including powerful loot and special effects, from chests.', dust: 5000, drop: '≈2–2.6%', source: 'Sprite Chests + standard chests' },
  { key: 'boss', name: 'Boss', rarity: 'Legendary', element: 'Tank', icon: '💪', ability: 'Grants an increase to your max HP and Shield.', dust: 5000, drop: '~2.63%', source: 'Boss NPC drops + extraction' },

  { key: 'zero-point', name: 'Zero Point', rarity: 'Mythic', element: 'Bubble', icon: '🌀', ability: 'Spawns a Shield Bubble Jr. when you use a healing item on yourself.', dust: 7500, drop: '0.00034%', source: 'Sprite Chests + standard chests' },
  { key: 'peanut', name: 'Burnt Peanut', rarity: 'Mythic', element: 'Loot', icon: '🥜', ability: 'May produce bonus loot, including Mythic items, after eliminations.', dust: 7500, drop: '<2%', source: 'Mythic Sprite pool + extraction' },
  { key: 'grim-reaper', name: 'Grim Reaper', rarity: 'Mythic', element: 'Marking', icon: '💀', ability: 'Marks players who damage you for a duration.', dust: 7500, drop: '0.04% contested', source: 'Mythic Sprite pool + extraction' }
];

// Current obtainable / tracked variants based on the public sprite database list.
const VARIANT_MAP = {
  'water': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem', 'Holofoil'],
  'earth': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'fire': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil'],
  'duck': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'ghost': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil'],
  'dream': ['Base', 'Gold', 'Gummy', 'Galaxy'],
  'demon': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'punk': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'king': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil'],
  'zero-point': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'peanut': ['Base'],
  'fishy': ['Base', 'Gold', 'Gummy', 'Galaxy'],
  'striker': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil'],
  'aura': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Gem'],
  'boss': ['Base', 'Gold', 'Gummy', 'Galaxy'],
  'grim-reaper': ['Base', 'Gold', 'Gummy', 'Galaxy'],
  'air': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil'],
  'seven': ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil']
};

const VARIANTS = ['Base', 'Gold', 'Gummy', 'Galaxy', 'Holofoil', 'Gem'];
const RARITIES = ['Rare', 'Epic', 'Legendary', 'Mythic'];

const VARIANT_INFO = {
  Base: { label: 'Base', bonus: 'Original Sprite ability.', chance: sprite => sprite.drop, dust: sprite => sprite.dust },
  Gold: { label: 'Gold', bonus: 'Premium golden visual variant.', chance: () => 'Well below 1%', dust: sprite => sprite.rarity === 'Mythic' ? 15000 : 4000 },
  Gummy: { label: 'Gummy', bonus: '+10% Sprite Dust bonus when extracting a Sprite.', chance: () => 'Very rare / unknown exact odds', dust: sprite => sprite.rarity === 'Mythic' ? 15000 : 4000 },
  Galaxy: { label: 'Galaxy', bonus: '+20% ammo from every ammo pickup.', chance: () => '≈0.02–0.06%', dust: () => 'Unknown' },
  Holofoil: { label: 'Holofoil', bonus: 'Holographic premium visual variant.', chance: () => 'New / rotating variant', dust: () => 'Unknown' },
  Gem: { label: 'Gem', bonus: 'Gemstone premium visual variant.', chance: () => 'New / rotating variant', dust: () => 'Unknown' }
};

const GUMMY_SOURCES = {
  fire: 'Urban areas of the map',
  earth: 'Forests and wooded areas',
  water: 'Near water bodies',
  duck: 'Epic vaults at Frosted Flats and Sinister Strip',
  demon: 'Sprite Chests',
  ghost: 'Chests at night',
  dream: 'Storage Chests',
  king: 'Sprite Chests',
  punk: 'Sprite Chests',
  'zero-point': 'Sprite Chests'
};

const LOCAL_IMAGE_OVERRIDES = {
  'base-peanut': 'assets/sprites/peanut.png',
  'base-grim-reaper': 'assets/sprites/grim-reaper.png',
  'gold-grim-reaper': 'assets/sprites/grim-reaper-gold.png',
  'gummy-grim-reaper': 'assets/sprites/grim-reaper-gummy.png',
  'galaxy-grim-reaper': 'assets/sprites/grim-reaper-galaxy.png'
};

function cssVariantClass(variant) { return `variant-${variant}`; }
function cssRarityClass(rarity) { return `rarity-${rarity}`; }
function slugFileName(name) { return name.replace(/ /g, '_'); }

function localImageUrl(sprite, variant) {
  const overrideKey = `${variant.toLowerCase()}-${sprite.key}`;
  return LOCAL_IMAGE_OVERRIDES[overrideKey] || '';
}

function fandomImageFileName(sprite, variant) {
  const base = slugFileName(sprite.name);
  return variant === 'Base'
    ? `${base}_Sprite_-_Item_-_Fortnite.png`
    : `${variant}_${base}_Sprite_-_Item_-_Fortnite.png`;
}

function getSource(sprite, variant) {
  if (variant === 'Gummy' && GUMMY_SOURCES[sprite.key]) return GUMMY_SOURCES[sprite.key];
  if (variant === 'Gold') return `${sprite.source}; Gold variant roll`;
  if (variant === 'Galaxy') return `${sprite.source}; Galaxy variant roll / event windows`;
  if (variant === 'Holofoil') return `${sprite.source}; Holofoil variant pool`;
  if (variant === 'Gem') return `${sprite.source}; Gem variant pool`;
  return sprite.source;
}

const sprites = BASE_SPRITES.flatMap(sprite => (VARIANT_MAP[sprite.key] || ['Base']).map(variant => ({
  id: `${variant.toLowerCase()}-${sprite.key}`,
  key: sprite.key,
  name: variant === 'Base' ? `${sprite.name} Sprite` : `${variant} ${sprite.name} Sprite`,
  shortName: variant === 'Base' ? sprite.name : `${variant} ${sprite.name}`,
  baseName: sprite.name,
  rarity: sprite.rarity,
  variant,
  element: sprite.element,
  icon: sprite.icon,
  ability: sprite.ability,
  bonus: VARIANT_INFO[variant].bonus,
  dust: VARIANT_INFO[variant].dust(sprite),
  drop: VARIANT_INFO[variant].chance(sprite),
  source: getSource(sprite, variant),
  season: 'Chapter 7 Season 3 — Runners',
  status: variant === 'Holofoil' || variant === 'Gem' ? 'Tracked variant / availability may rotate' : 'Available / tracked',
  imageUrl: localImageUrl(sprite, variant),
  imageFile: fandomImageFileName(sprite, variant)
})));

const STORAGE_KEY = 'fortnite-sprite-codex-v2';
const VIEW_KEY = 'fortnite-sprite-view-mode';
const IMAGE_CACHE_KEY = 'fortnite-sprite-fandom-image-cache-v1';
let fandomImageCache = loadImageCache();
let currentVariant = 'All';
let currentRarity = 'All';
let showOnlyMissing = false;
let searchTerm = '';
let viewMode = localStorage.getItem(VIEW_KEY) || 'collection';
let collection = loadCollection();

function loadCollection() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function loadImageCache() {
  try { return JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY)) || {}; }
  catch { return {}; }
}
function saveImageCache() {
  try { localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(fandomImageCache)); }
  catch {}
}
function saveCollection() { localStorage.setItem(STORAGE_KEY, JSON.stringify(collection)); }
function isOwned(id) { return Boolean(collection[id]?.owned); }

function setOwned(id, owned = true) {
  const previous = collection[id] || {};
  collection[id] = {
    ...previous,
    owned,
    caughtAt: owned ? (previous.caughtAt || new Date().toISOString()) : null,
    count: owned ? Math.max(1, previous.count || 1) : 0
  };
}
function markOwned(id, owned = true) { setOwned(id, owned); saveCollection(); render(); }
function formatDate(value) { return value ? new Date(value).toLocaleString('en-GB') : 'Not collected yet'; }

function getFilteredSprites() {
  const term = searchTerm.trim().toLowerCase();
  return sprites.filter(sprite => {
    const haystack = [sprite.name, sprite.shortName, sprite.variant, sprite.rarity, sprite.source, sprite.drop, sprite.ability, sprite.element].join(' ').toLowerCase();
    const matchesSearch = !term || haystack.includes(term);
    const matchesVariant = currentVariant === 'All' || sprite.variant === currentVariant;
    const matchesRarity = currentRarity === 'All' || sprite.rarity === currentRarity;
    const matchesMissing = !showOnlyMissing || !isOwned(sprite.id);
    return matchesSearch && matchesVariant && matchesRarity && matchesMissing;
  });
}

function spriteVisual(sprite, size = 'card') {
  const cached = sprite.imageUrl || fandomImageCache[sprite.imageFile] || '';
  const srcAttr = cached ? `src="${cached}"` : '';
  const localClass = sprite.imageUrl ? 'image-local' : '';
  return `<div class="sprite-image-wrap ${size} ${localClass}" data-fandom-file="${sprite.imageFile}">
    <img class="sprite-img" ${srcAttr} alt="${sprite.name}" loading="lazy" referrerpolicy="no-referrer" />
    <div class="fallback-orb"><span>${sprite.icon}</span></div>
  </div>`;
}

async function resolveFandomImage(fileName) {
  if (!fileName) return '';
  if (fandomImageCache[fileName]) return fandomImageCache[fileName];

  const api = `https://fortnite.fandom.com/api.php?action=query&titles=${encodeURIComponent(`File:${fileName}`)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error('Fandom API request failed');
    const data = await response.json();
    const pages = data?.query?.pages || {};
    const firstPage = Object.values(pages)[0];
    const url = firstPage?.imageinfo?.[0]?.url || '';
    if (!url) throw new Error('Image URL not found');
    fandomImageCache[fileName] = url;
    saveImageCache();
    return url;
  } catch {
    fandomImageCache[fileName] = '';
    saveImageCache();
    return '';
  }
}

function prepareImageElement(img, wrap) {
  const fail = () => {
    wrap.classList.remove('image-loaded');
    wrap.classList.add('image-failed');
    img.removeAttribute('src');
  };

  img.onload = () => {
    if (img.naturalWidth > 1 && img.naturalHeight > 1) {
      wrap.classList.add('image-loaded');
      wrap.classList.remove('image-failed');
    } else {
      fail();
    }
  };
  img.onerror = fail;

  if (img.getAttribute('src') && img.complete) {
    img.onload();
  }
}

async function hydrateSpriteImages(root = document) {
  const wraps = [...root.querySelectorAll('.sprite-image-wrap')];
  for (const wrap of wraps) {
    const img = wrap.querySelector('.sprite-img');
    if (!img) continue;
    prepareImageElement(img, wrap);

    if (img.getAttribute('src')) continue;
    const fileName = wrap.dataset.fandomFile;
    const url = await resolveFandomImage(fileName);
    if (url) {
      img.src = url;
    } else {
      wrap.classList.add('image-failed');
    }
  }
}

function renderStats() {
  const totalOwned = sprites.filter(s => isOwned(s.id)).length;
  const percent = sprites.length ? Math.round((totalOwned / sprites.length) * 100) : 0;
  document.getElementById('totalProgress').textContent = `${totalOwned} / ${sprites.length}`;
  document.getElementById('totalBar').style.width = `${percent}%`;
  document.getElementById('totalPercent').textContent = `${percent}% completed`;

  const stats = VARIANTS.map(variant => {
    const group = sprites.filter(s => s.variant === variant);
    const owned = group.filter(s => isOwned(s.id)).length;
    const groupPercent = group.length ? Math.round((owned / group.length) * 100) : 0;
    const isActive = currentVariant === variant;
    return `<button type="button" class="stat ${cssVariantClass(variant)} ${isActive ? 'active' : ''}" data-stat-variant="${variant}" aria-label="Show all ${variant} sprites">
      <b>${owned} / ${group.length}</b>
      <span>${variant}${owned === group.length && group.length ? ' completed ✓' : ' sprites'}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${groupPercent}%"></div></div>
    </button>`;
  }).join('');
  document.getElementById('stats').innerHTML = stats;
}

function renderFilters() {
  document.getElementById('variantFilters').innerHTML = ['All', ...VARIANTS]
    .map(v => `<button class="pill filter-btn ${currentVariant === v ? 'active' : ''} ${v !== 'All' ? cssVariantClass(v) : ''}" data-variant="${v}">${v}</button>`).join('');
  document.getElementById('rarityFilters').innerHTML = ['All', ...RARITIES]
    .map(r => `<button class="pill filter-btn ${currentRarity === r ? 'active' : ''} ${r !== 'All' ? cssRarityClass(r) : ''}" data-rarity="${r}">${r}</button>`).join('');
  document.getElementById('bulkVariantButtons').innerHTML = VARIANTS
    .map(v => `<button class="pill mini ${cssVariantClass(v)}" data-mark-variant="${v}">${v}</button>`).join('');
}

function tile(sprite) {
  const owned = isOwned(sprite.id);
  return `<article class="sprite-tile ${cssVariantClass(sprite.variant)} ${cssRarityClass(sprite.rarity)} ${owned ? 'owned' : 'locked'}">
    <button class="sprite-button" data-detail="${sprite.id}" aria-label="Open ${sprite.name} detail">
      ${spriteVisual(sprite, 'card')}
      <span class="sprite-name">${sprite.shortName}</span>
      <span class="sprite-sub"><span class="variant-chip">${sprite.variant}</span><span class="rarity-chip">${sprite.rarity}</span></span>
      <span class="drop-text">Drop: ${sprite.drop}</span>
    </button>
    <button class="tile-toggle" data-toggle="${sprite.id}" aria-label="${owned ? 'Remove' : 'Add'} ${sprite.name}"><span>${owned ? '✓' : '+'}</span>${owned ? 'Collected' : 'Add'}</button>
  </article>`;
}

function miniTile(sprite) {
  const owned = isOwned(sprite.id);
  return `<article class="showcase-item ${cssVariantClass(sprite.variant)} ${owned ? 'owned' : 'locked'}" title="${sprite.name}">
    <button class="mini-hit" data-detail="${sprite.id}" aria-label="Open ${sprite.name} detail">
      <span class="mini-check" data-toggle="${sprite.id}" role="button" aria-label="${owned ? 'Remove' : 'Add'} ${sprite.name}">${owned ? '✓' : '+'}</span>
      ${spriteVisual(sprite, 'mini')}
      <span class="mini-name">${sprite.shortName}</span>
    </button>
  </article>`;
}

function renderShowcase(filtered) {
  return VARIANTS.map(variant => {
    const group = filtered.filter(s => s.variant === variant);
    if (!group.length) return '';
    const owned = group.filter(s => isOwned(s.id)).length;
    return `<section class="showcase-group ${cssVariantClass(variant)}">
      <div class="showcase-head"><h3>${variant}</h3><span>${owned} / ${group.length}</span></div>
      <div class="showcase-grid">${group.map(miniTile).join('')}</div>
    </section>`;
  }).join('') || '<div class="empty">No sprites match this filter.</div>';
}

function renderGrid() {
  const filtered = getFilteredSprites();
  const title = viewMode === 'showcase'
    ? 'Showcase wall'
    : showOnlyMissing
      ? 'Missing sprites'
      : currentVariant === 'All'
        ? 'All sprites'
        : `${currentVariant} sprites`;

  document.getElementById('sectionTitle').textContent = title;
  document.getElementById('visibleCount').textContent = `${filtered.length} of ${sprites.length} shown`;
  document.querySelectorAll('[data-view]').forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewMode));

  const grid = document.getElementById('spriteGrid');
  grid.className = viewMode === 'showcase' ? 'showcase-wall' : 'collection-flow';
  grid.innerHTML = filtered.length
    ? (viewMode === 'showcase' ? renderShowcase(filtered) : filtered.map(tile).join(''))
    : '<div class="empty">No sprites match this filter.</div>';
  hydrateSpriteImages(grid);
}

function openDetail(id) {
  const sprite = sprites.find(s => s.id === id);
  if (!sprite) return;
  const owned = isOwned(id);
  const record = collection[id] || {};

  document.getElementById('modalContent').innerHTML = `<div class="${cssVariantClass(sprite.variant)} ${cssRarityClass(sprite.rarity)}">
    <div class="modal-hero">
      ${spriteVisual(sprite, 'modal')}
      <div>
        <p class="modal-kicker">${sprite.variant} / ${sprite.rarity}</p>
        <h3>${sprite.name}</h3>
        <p class="muted">${owned ? 'Collected ✓' : 'Missing'}</p>
      </div>
    </div>
    <div class="info-grid">
      <div class="info"><span>Drop chance</span><b>${sprite.drop}</b></div>
      <div class="info"><span>Where to catch</span><b>${sprite.source}</b></div>
      <div class="info"><span>Ability</span><b>${sprite.ability}</b></div>
      <div class="info"><span>Variant bonus</span><b>${sprite.bonus}</b></div>
      <div class="info"><span>Dust</span><b>${sprite.dust}</b></div>
      <div class="info"><span>First collected</span><b>${formatDate(record.caughtAt)}</b></div>
      <div class="info"><span>Season</span><b>${sprite.season}</b></div>
      <div class="info"><span>Status</span><b>${sprite.status}</b></div>
    </div>
    <div class="modal-actions">
      <button type="button" class="pill primary" data-toggle="${sprite.id}">${owned ? 'Remove from collection' : 'Add to collection'}</button>
      <button type="button" class="pill ghost" onclick="document.getElementById('spriteDialog').close()">Close</button>
    </div>
  </div>`;
  const dialog = document.getElementById('spriteDialog');
  hydrateSpriteImages(document.getElementById('modalContent'));
  if (!dialog.open) dialog.showModal();
}


function markVisible(owned) {
  getFilteredSprites().forEach(sprite => setOwned(sprite.id, owned));
  saveCollection();
  render();
}
function markVariant(variant) {
  sprites.filter(sprite => sprite.variant === variant).forEach(sprite => setOwned(sprite.id, true));
  saveCollection();
  render();
}

function render() {
  renderFilters();
  renderStats();
  renderGrid();
}

document.addEventListener('click', event => {
  const toggle = event.target.closest('[data-toggle]');
  if (toggle) {
    event.preventDefault();
    event.stopPropagation();
    const id = toggle.dataset.toggle;
    markOwned(id, !isOwned(id));
    if (document.getElementById('spriteDialog').open) openDetail(id);
    return;
  }

  const detail = event.target.closest('[data-detail]');
  if (detail) { openDetail(detail.dataset.detail); return; }

  const statVariant = event.target.closest('[data-stat-variant]');
  if (statVariant) {
    currentVariant = statVariant.dataset.statVariant;
    showOnlyMissing = false;
    viewMode = 'collection';
    localStorage.setItem(VIEW_KEY, viewMode);
    render();
    document.getElementById('sectionTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const variant = event.target.closest('[data-variant]');
  if (variant) { currentVariant = variant.dataset.variant; showOnlyMissing = false; render(); return; }

  const rarity = event.target.closest('[data-rarity]');
  if (rarity) { currentRarity = rarity.dataset.rarity; render(); return; }

  const view = event.target.closest('[data-view]');
  if (view) { viewMode = view.dataset.view; localStorage.setItem(VIEW_KEY, viewMode); renderGrid(); return; }

  const markVariantBtn = event.target.closest('[data-mark-variant]');
  if (markVariantBtn) { markVariant(markVariantBtn.dataset.markVariant); }
});

document.addEventListener('input', event => {
  if (event.target.id === 'searchInput') { searchTerm = event.target.value; renderGrid(); }
});

document.getElementById('showMissingBtn').addEventListener('click', () => { showOnlyMissing = true; render(); });
document.getElementById('showcaseBtn').addEventListener('click', () => { showOnlyMissing = false; currentVariant = 'All'; currentRarity = 'All'; searchTerm = ''; document.getElementById('searchInput').value = ''; viewMode = 'showcase'; localStorage.setItem(VIEW_KEY, viewMode); render(); });
document.getElementById('showAllBtn').addEventListener('click', () => { showOnlyMissing = false; currentVariant = 'All'; currentRarity = 'All'; searchTerm = ''; document.getElementById('searchInput').value = ''; viewMode = 'collection'; localStorage.setItem(VIEW_KEY, viewMode); render(); });
document.getElementById('markVisibleBtn').addEventListener('click', () => markVisible(true));
document.getElementById('clearVisibleBtn').addEventListener('click', () => markVisible(false));
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset your whole Sprite collection?')) { collection = {}; saveCollection(); render(); }
});
document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), collection }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fortnite-sprite-collection.json';
  a.click();
  URL.revokeObjectURL(url);
});
document.getElementById('importInput').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    collection = data.collection || data || {};
    saveCollection();
    render();
  } catch {
    alert('Import failed. Please choose a valid JSON export file.');
  }
});

render();
