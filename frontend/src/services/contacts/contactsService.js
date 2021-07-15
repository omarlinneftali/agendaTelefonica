import http from "../httpService";
// import auth from "../authService";
import { apiUrl } from "../../config/config.js";
import { toast } from "react-toastify";

const apiEndpoint = apiUrl + "/contacts";
function getUrl(route) {
  return `${apiEndpoint}/${route}`;
}
// client Crud
export function getContacts(filter) {
  return http.get(apiEndpoint);
}

export function getContactById(clientID) {
  return http.get(getUrl(clientID));
}
export function saveContact(contact) {
  try {
    if (contact?.id) {
      return http.put(getUrl(contact.id), contact);
    }

    return http.post(apiEndpoint, contact);
  } catch (error) {
    console.error("error al enviar", contact);
  }
}

export function deleteContact(id) {
  return http.delete(getUrl(id));
}
