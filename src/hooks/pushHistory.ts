export default function pushHistory(newURL: string) {
  history.pushState({ ...history.state, as: newURL, url: newURL }, "", newURL);
}
