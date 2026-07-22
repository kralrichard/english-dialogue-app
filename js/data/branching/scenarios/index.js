// Registers every Story Mode scenario. Importing this validates all graphs
// (createScenario throws on malformed content), so a bad scenario fails loudly
// at boot with its id — it can never half-render inside a conversation.

import { allChoiceKeys } from '../scenarioSchema.js';
import { hotelCheckin, hotelRoomProblem } from './hotel.js';
import { airportCheckin, missingFlight } from './airport.js';
import { hospitalVisit, pharmacyVisit } from './health.js';
import { restaurantOrder, wrongOrder } from './restaurant.js';
import { meetingFriend, askingDirections } from './social.js';
import { jobInterview, workplaceMisunderstanding } from './workplace.js';
import { cafeOrder, cafeMeetup } from './cafe.js';
import { supermarketHelp, clothingReturn } from './shopping.js';
import { trainTicket, taxiRide } from './travel.js';
import { bankLostCard, policeLostPhone } from './services.js';
import { homeMorning } from './home.js';
import { hotelAmenities, passportControl, restaurantBill } from './extras.js';

export const ALL_SCENARIOS = [
  // originals
  hotelCheckin, hotelRoomProblem,
  airportCheckin, missingFlight,
  hospitalVisit, pharmacyVisit,
  restaurantOrder, wrongOrder,
  meetingFriend, askingDirections,
  jobInterview, workplaceMisunderstanding,
  // new environments
  cafeOrder, cafeMeetup,
  supermarketHelp, clothingReturn,
  trainTicket, taxiRide,
  bankLostCard, policeLostPhone,
  homeMorning,
  // extra depth for existing environments
  hotelAmenities, passportControl, restaurantBill
];

// Cache each scenario's total choice count on the object (used for progress %
// and the all_branches achievement). Derived from content, never hardcoded.
for (const s of ALL_SCENARIOS) {
  s._totalChoices = allChoiceKeys(s).length;
}

export const SCENARIOS_BY_ID = Object.fromEntries(ALL_SCENARIOS.map(s => [s.id, s]));

export function getScenario(id) { return SCENARIOS_BY_ID[id] || null; }

// Environments grouped for the Story map, in display order. Every environment
// with authored scenarios is listed here — nothing is locked.
export const STORY_ENVIRONMENTS = [
  { id: 'hotel',      label: 'Hotel',       labelTr: 'Otel',       icon: '🏨', sceneType: 'hotel-lobby' },
  { id: 'airport',    label: 'Airport',     labelTr: 'Havalimanı', icon: '✈️', sceneType: 'airport' },
  { id: 'restaurant', label: 'Restaurant',  labelTr: 'Restoran',   icon: '🍽️', sceneType: 'restaurant' },
  { id: 'cafe',       label: 'Café',        labelTr: 'Kafe',       icon: '☕', sceneType: 'cafe' },
  { id: 'hospital',   label: 'Hospital',    labelTr: 'Hastane',    icon: '🏥', sceneType: 'hospital' },
  { id: 'pharmacy',   label: 'Pharmacy',    labelTr: 'Eczane',     icon: '💊', sceneType: 'retail' },
  { id: 'supermarket',label: 'Supermarket', labelTr: 'Market',     icon: '🛒', sceneType: 'retail' },
  { id: 'clothing',   label: 'Clothing Store', labelTr: 'Giyim Mağazası', icon: '👕', sceneType: 'retail' },
  { id: 'train',      label: 'Train Station', labelTr: 'Tren Garı', icon: '🚆', sceneType: 'transit' },
  { id: 'taxi',       label: 'Taxi',        labelTr: 'Taksi',      icon: '🚕', sceneType: 'taxi' },
  { id: 'bank',       label: 'Bank',        labelTr: 'Banka',      icon: '🏦', sceneType: 'bank-office' },
  { id: 'police',     label: 'Police Station', labelTr: 'Karakol', icon: '🚓', sceneType: 'formal-office' },
  { id: 'street',     label: 'Out & About', labelTr: 'Dışarıda',   icon: '🚶', sceneType: 'street' },
  { id: 'workplace',  label: 'Workplace',   labelTr: 'İş Yeri',    icon: '💼', sceneType: 'formal-office' },
  { id: 'home',       label: 'Home',        labelTr: 'Ev',         icon: '🏠', sceneType: 'home' }
];

export function scenariosForEnvironment(envId) {
  return ALL_SCENARIOS.filter(s => s.environmentId === envId);
}
