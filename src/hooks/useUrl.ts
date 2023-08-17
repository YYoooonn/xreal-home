export default function useUrl(newURL: string) {
  history.pushState({ ...history.state, as: newURL, url: newURL }, "", newURL);
}
