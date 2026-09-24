import cartonGulabi from '../assets/gallery/carton-super-gulabi.jpg'
import cartonExport from '../assets/gallery/carton-export-special.jpg'
import cartonWhite from '../assets/gallery/carton-super-white.jpg'
import cartonFursungi from '../assets/gallery/carton-puna-fursungi.jpg'
import labelGulabi from '../assets/gallery/label-super-gulabi.jpg'
import labelExport from '../assets/gallery/label-export-special.jpg'
import labelWhite from '../assets/gallery/label-super-white.jpg'
import labelFursungi from '../assets/gallery/label-puna-fursungi.jpg'
import onionGulabi from '../assets/onion-super-gulabi.jpg'
import onionWhite from '../assets/onion-super-white.jpg'
import onionFursungi from '../assets/onion-puna-fursungi.jpg'
import onionExport from '../assets/onion-export-special.jpg'

// Added — general onion crop / packaging photos.
// IMPORTANT: these files must sit directly in src/assets/gallery/
// (NOT in a src/assets/gallery/onion/ subfolder) — same folder as the
// carton/label images above.
import onionGoldenCluster from '../../src/assets/gallery/onion/onion-golden-cluster.jpg'
import onionWhiteCluster from '../../src/assets/gallery/onion/onion-white-cluster.jpg'
import onionRedCluster from '../../src/assets/gallery/onion/onion-red-cluster.jpg'
import onionFieldRow from '../../src/assets/gallery/onion/onion-field-row.jpg'
import onionGoldenHarvest from '../../src/assets/gallery/onion/onion-golden-harvest.jpg'
import onionWhitePack from '../../src/assets/gallery/onion/onion-white-pack.jpg'
import onionPurplePack from '../../src/assets/gallery/onion/onion-purple-pack.jpg' 
import onionRedPack from '../../src/assets/gallery/onion/onion-red-pack.jpg'
import onionPinkPairPack from '../../src/assets/gallery/onion/onion-pink-pair-pack.jpg'
import onionRedCutPack from '../../src/assets/gallery/onion/onion-red-cut-pack.jpg'

/**
 * Gallery images. All of these come from GATEE SEEDS pack artwork.
 * Add field, crop, storage and godown photographs here as they become available.
 */
const galleryItems = [
  { id: 'g1', src: onionGulabi, category: 'Onion Crops', title: 'Super Gulabi onion', alt: 'Rose-pink Super Gulabi onion bulbs', size: 'wide' },
  { id: 'g2', src: cartonGulabi, category: 'Packaging', title: 'Super Gulabi carton', alt: 'Printed carton artwork for Super Gulabi onion seed', size: 'wide' },
  { id: 'g3', src: labelWhite, category: 'Packaging', title: 'Super White pack face', alt: 'Front face of the Super White onion seed pack', size: 'tall' },
  { id: 'g4', src: onionWhite, category: 'Onion Crops', title: 'Super White onion', alt: 'White onion bulbs with green tops', size: 'wide' },
  { id: 'g5', src: cartonExport, category: 'Packaging', title: 'Export Special carton', alt: 'Printed carton artwork for Onion Export Special seed', size: 'wide' },
  { id: 'g6', src: labelFursungi, category: 'Packaging', title: 'Puna Fursungi pack face', alt: 'Front face of the Puna Fursungi Gavran onion seed pack', size: 'tall' },
  { id: 'g7', src: onionFursungi, category: 'Onion Crops', title: 'Puna Fursungi Gavran', alt: 'Golden brown Puna Fursungi Gavran onion bulbs', size: 'wide' },
  { id: 'g8', src: labelGulabi, category: 'Packaging', title: 'Super Gulabi pack face', alt: 'Front face of the Super Gulabi onion seed pack', size: 'tall' },
  { id: 'g9', src: onionExport, category: 'Onion Crops', title: 'Export Special onion', alt: 'Deep red export grade onion bulb', size: 'wide' },
  { id: 'g10', src: cartonWhite, category: 'Packaging', title: 'Super White carton', alt: 'Printed carton artwork for Super White onion seed', size: 'wide' },
  { id: 'g11', src: labelExport, category: 'Packaging', title: 'Export Special pack face', alt: 'Front face of the Onion Export Special seed pack', size: 'tall' },
  { id: 'g12', src: cartonFursungi, category: 'Packaging', title: 'Puna Fursungi carton', alt: 'Printed carton artwork for Puna Fursungi Gavran onion seed', size: 'wide' },

  // Added — general onion crop photos
  { id: 'g13', src: onionGoldenCluster, category: 'Onion Crops', title: 'Golden Onion', alt: 'Golden onions with green stem, freshly picked', size: 'wide' },
  { id: 'g14', src: onionWhiteCluster, category: 'Onion Crops', title: 'White Onion', alt: 'Cluster of white onions with green stems', size: 'wide' },
  { id: 'g15', src: onionRedCluster, category: 'Onion Crops', title: 'Red Onion', alt: 'Close-up pile of red onions', size: 'wide' },
  { id: 'g16', src: onionFieldRow, category: 'Onion Crops', title: 'Onion Field', alt: 'Row of onions growing in the field with green tops', size: 'wide' },
  { id: 'g17', src: onionGoldenHarvest, category: 'Onion Crops', title: 'Golden Onion Harvest', alt: 'Large harvest pile of golden onions', size: 'wide' },

  // Added — packaging cutout images
  { id: 'g18', src: onionWhitePack, category: 'Packaging', title: 'White Onion', alt: 'White onion product cutout', size: 'tall' },
  { id: 'g19', src: onionPurplePack, category: 'Packaging', title: 'Purple Onion', alt: 'Purple onion product cutout', size: 'tall' },
  { id: 'g20', src: onionRedPack, category: 'Packaging', title: 'Red Onion', alt: 'Red onion product cutout', size: 'tall' },
  { id: 'g21', src: onionPinkPairPack, category: 'Packaging', title: 'Pink Onion', alt: 'Pair of pink onions product cutout', size: 'tall' },
  { id: 'g22', src: onionRedCutPack, category: 'Packaging', title: 'Red Onion (Cut)', alt: 'Red onions with one sliced open, showing the interior', size: 'tall' },
]

export const galleryCategories = ['All', 'Onion Crops', 'Packaging']

export default galleryItems