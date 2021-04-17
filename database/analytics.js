
const db = require("./firebase");
const analytics = db.ref('analytics')

/**
 * 
 * @param {*} data 
 * @returns {string} saved data id
 */
const save = (data) => {
  let ref = analytics.push()
  ref.set(data)
  return ref.key
}


/**
 * 
 * @param {number} startDate timestamp 
 * @param {number} endDate timestamp
 * 
 * @returns {Promise<any>}
 */
const fetch = (startDate, endDate) => {
  return new Promise(resolve => {
    let ref = analytics.orderByChild('date')

    if (startDate) ref = ref.startAt(startDate)
    if (endDate) ref = ref.endAt(endDate)

    ref.once("value", function (data) {
      resolve(data.val() || [])
    });
  })
}

module.exports = {
  save,
  fetch
}