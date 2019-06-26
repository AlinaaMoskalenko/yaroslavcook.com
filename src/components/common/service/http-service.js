export default class HTTPService {
  get(url, successCallBack, errorCallBack) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url);
    xhr.send();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const parseData = JSON.parse(xhr.response);
          successCallBack(parseData);
        } else {
          errorCallBack(xhr);
        }
      }
    }
  }
}