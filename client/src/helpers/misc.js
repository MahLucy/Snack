export function getRoute(path) {
  let args = Array.prototype.slice.call(arguments, 1);
  let count = -1;
  return path.replace(/:[a-zA-Z?]+/g, (match) => {
    count += 1;
    return args[count] !== undefined ? args[count] : match;
  });
}

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const opportunityNumberRegex = /\d{4}[A-z]{1}\d{5}[A-z]{2}\d{1}[A-z]{5}/;
