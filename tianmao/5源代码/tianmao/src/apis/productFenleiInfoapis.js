import {AJAXURL} from "../commons/urlproductFenleiInfoapis";

export default {
  getData(cb) {
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
