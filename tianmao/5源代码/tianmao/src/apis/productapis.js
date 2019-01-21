import {AJAXURL} from "../commons/urlproduct";

export default {
  getData(cb) {
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
