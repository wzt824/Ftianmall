import {AJAXURL} from "../commons/urlplant";

export default {
  getData(cb) {
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
