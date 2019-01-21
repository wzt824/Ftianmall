import {AJAXURL} from "../commons/urlindex";

export default {
  getData(cb) {
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
