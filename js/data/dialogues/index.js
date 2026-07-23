// Aggregates every authored dialogue into one registry. To add new content,
// create a new file in this folder exporting an array of createDialogue(...)
// results, then add one line here. Everything else (pickers, engine,
// progress, review) discovers content through this module -- nothing else
// needs to change.
import { HOTEL_DIALOGUES } from './hotel.js?v=content110';
import { RESTAURANT_DIALOGUES } from './restaurant.js?v=content110';
import { CAFE_DIALOGUES } from './cafe.js?v=content110';
import { PHARMACY_DIALOGUES } from './pharmacy.js?v=content110';
import { TAXI_DIALOGUES } from './taxi.js?v=content110';
import { PASSPORT_CONTROL_DIALOGUES } from './passport-control.js?v=content110';
import { AIRPORT_DIALOGUES } from './airport.js?v=content110';
import { HOSPITAL_DIALOGUES } from './hospital.js?v=content110';
import { PARTY_DIALOGUES } from './party.js?v=content110';
import { TRAIN_STATION_DIALOGUES } from './train-station.js?v=content110';
import { CLOTHING_STORE_DIALOGUES } from './clothing-store.js?v=content110';
import { PHONE_CALL_DIALOGUES } from './phone-call.js?v=content110';
import { TECH_STORE_DIALOGUES } from './tech-store.js?v=content110';
import { JOB_INTERVIEW_DIALOGUES } from './job-interview.js?v=content110';
import { BANK_DIALOGUES } from './bank.js?v=content110';
import { TRAVEL_AGENCY_DIALOGUES } from './travel-agency.js?v=content110';
import { BUSINESS_MEETING_DIALOGUES } from './business-meeting.js?v=content110';
import { DEBATE_TOPICS_DIALOGUES } from './debate-topics.js?v=content110';
import { SEASIDE_DIALOGUES } from './seaside.js?v=content110';
import { AIRPLANE_DIALOGUES } from './airplane.js?v=content110';
import { SUPERMARKET_DIALOGUES } from './supermarket.js?v=content110';
import { BUS_STOP_DIALOGUES } from './bus-stop.js?v=content110';
import { POLICE_STATION_DIALOGUES } from './police-station.js?v=content110';
import { SCHOOL_DIALOGUES } from './school.js?v=content110';
import { UNIVERSITY_DIALOGUES } from './university.js?v=content110';
import { HOME_DIALOGUES } from './home.js?v=content110';
import { GYM_DIALOGUES } from './gym.js?v=content110';
import { CAR_RENTAL_DIALOGUES } from './car-rental.js?v=content110';
import { CUSTOMS_DIALOGUES } from './customs.js?v=content110';
import { NEW_PERSON_DIALOGUES } from './new-person.js?v=content110';
import { FRIEND_CHAT_DIALOGUES } from './friend-chat.js?v=content110';
import { DIRECTIONS_DIALOGUES } from './directions.js?v=content110';
import { COMPLAINT_DIALOGUES } from './complaint.js?v=content110';
import { FEELINGS_DIALOGUES } from './feelings.js?v=content110';

export const ALL_DIALOGUES = [
  ...HOTEL_DIALOGUES,
  ...RESTAURANT_DIALOGUES,
  ...CAFE_DIALOGUES,
  ...PHARMACY_DIALOGUES,
  ...TAXI_DIALOGUES,
  ...PASSPORT_CONTROL_DIALOGUES,
  ...AIRPORT_DIALOGUES,
  ...HOSPITAL_DIALOGUES,
  ...PARTY_DIALOGUES,
  ...TRAIN_STATION_DIALOGUES,
  ...CLOTHING_STORE_DIALOGUES,
  ...PHONE_CALL_DIALOGUES,
  ...TECH_STORE_DIALOGUES,
  ...JOB_INTERVIEW_DIALOGUES,
  ...BANK_DIALOGUES,
  ...TRAVEL_AGENCY_DIALOGUES,
  ...BUSINESS_MEETING_DIALOGUES,
  ...DEBATE_TOPICS_DIALOGUES,
  ...SEASIDE_DIALOGUES,
  ...AIRPLANE_DIALOGUES,
  ...SUPERMARKET_DIALOGUES,
  ...BUS_STOP_DIALOGUES,
  ...POLICE_STATION_DIALOGUES,
  ...SCHOOL_DIALOGUES,
  ...UNIVERSITY_DIALOGUES,
  ...HOME_DIALOGUES,
  ...GYM_DIALOGUES,
  ...CAR_RENTAL_DIALOGUES,
  ...CUSTOMS_DIALOGUES,
  ...NEW_PERSON_DIALOGUES,
  ...FRIEND_CHAT_DIALOGUES,
  ...DIRECTIONS_DIALOGUES,
  ...COMPLAINT_DIALOGUES,
  ...FEELINGS_DIALOGUES
];

export function getDialogueById(id) {
  return ALL_DIALOGUES.find(d => d.id === id);
}

export function findDialogues({ locationId, scenarioId, level, topic } = {}) {
  return ALL_DIALOGUES.filter(d =>
    (!locationId || d.locationId === locationId) &&
    (!scenarioId || d.scenarioId === scenarioId) &&
    (!level || d.level === level) &&
    (!topic || (d.tags || []).includes(topic))
  );
}

/** Returns a Set of "locationId::scenarioId" keys that have at least one
 *  authored dialogue -- used by the picker to mark scenarios as playable
 *  vs. "Coming soon". */
export function getAvailableScenarioKeys() {
  return new Set(ALL_DIALOGUES.map(d => `${d.locationId}::${d.scenarioId}`));
}

/** Returns a Set of level codes that have at least one authored dialogue for
 *  a given location+scenario -- used to grey out levels with no content. */
export function getAvailableLevels(locationId, scenarioId) {
  return new Set(
    ALL_DIALOGUES
      .filter(d => d.locationId === locationId && d.scenarioId === scenarioId)
      .map(d => d.level)
  );
}
