module.exports = class {
  constructor() {
    this.format()
    this.prev()
    this.prevDay()
    this.prevMonth()
    this.prevYear()
    this.next()
    this.nextDay()
    this.nextMonth()
    this.nextYear()
    this.getWeek()
    return this
  }
  prev() {
    Date.prototype.prev = function(timestamp) {
      return new Date(+this - timestamp)
    }
  }
  prevDay() {
    Date.prototype.prevDay = function(options = { day: 1, isShowAll: false, includeCurrent: false }) {
      let { day = 1, isShowAll = false, includeCurrent = false } = options
      if ((!isShowAll) && !includeCurrent) {
        return new Date(+this - day * 1e3 * 60 * 60 * 24)
      }
      let results = []
      for (let i = +!includeCurrent; i <= day - +includeCurrent; i++) {
        results.push(new Date(+this - i * 1e3 * 60 * 60 * 24))
        // day is 1 push prev 1 day
        if (day === 1) {
          results.push(new Date(+this - 1 * 1e3 * 60 * 60 * 24))
        }
      }
      return results
    }
  }
  prevMonth() {
    Date.prototype.prevMonth = function(options = { month: 1, isShowAll: false, includeCurrent: false }) {
      let { month = 1, isShowAll = false, includeCurrent = false } = options
      let currentMonth = this.getMonth() + 1
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setMonth(currentMonth - month - 1))
      }
      let results = []
      for (let i = 1; i <= month; i++) {
        results.push(new Date(new Date().setMonth(currentMonth - i - +!includeCurrent)))
      }
      return results
    }
  }
  prevYear() {
    Date.prototype.prevYear = function(options = { year: 1, isShowAll: false, includeCurrent: false }) {
      let { year = 1, isShowAll = false, includeCurrent = false } = options
      let currentYear = this.getFullYear()
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setFullYear(currentYear - year))
      }
      let results = []
      for (let i = 0; i < year; i++) {
        results.push(new Date(new Date().setFullYear(currentYear - i - +!includeCurrent)))
      }
      return results
    }
  }
  next() {
    Date.prototype.next = function(timestamp) {
      return new Date(+this + timestamp)
    }
  }
  nextDay() {
    Date.prototype.nextDay = function(options = { day: 1, isShowAll: false, includeCurrent: false }) {
      let { day = 1, isShowAll = false, includeCurrent = false } = options
      if ((!isShowAll) && !includeCurrent) {
        return new Date(+this + day * 1e3 * 60 * 60 * 24)
      }
      let results = []
      for (let i = +!includeCurrent; i <= day - +includeCurrent; i++) {
        results.push(new Date(+this + i * 1e3 * 60 * 60 * 24))
        // day is 1 push next 1 day
        if (day === 1) {
          results.push(new Date(+this + 1 * 1e3 * 60 * 60 * 24))
        }
      }
      return results
    }
  }
  nextMonth() {
    Date.prototype.nextMonth = function(options = { month: 1, isShowAll: false, includeCurrent: false }) {
      let { month = 1, isShowAll = false, includeCurrent = false } = options
      let currentMonth = this.getMonth() + 1
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setMonth(currentMonth + month - 1))
      }
      let results = []
      for (let i = 1; i <= month; i++) {
        results.push(new Date(new Date().setMonth(currentMonth + i - +!includeCurrent)))
      }
      return results
    }
  }
  nextYear() {
    Date.prototype.nextYear = function(options = { year: 1, isShowAll: false, includeCurrent: false }) {
      let { year = 1, isShowAll = false, includeCurrent = false } = options
      let currentYear = this.getFullYear()
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setFullYear(currentYear + year))
      }
      let results = []
      for (let i = 0; i < year; i++) {
        results.push(new Date(new Date().setFullYear(currentYear + i - +!includeCurrent)))
      }
      return results
    }
  }
  split(options = {}) {
    let { startTime, endTime, gap } = options
    let results = []
    let n = Math.floor(+endTime - +startTime) / gap
    for (let i = 0; i <= n; i++) {
      results.push(new Date(+startTime + gap * i))
    }
    return results
  }
  format() {
    Date.prototype.format = function(fmt) {
      let o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
      }
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (this.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
          )
      return fmt
    }
  }
  calc(options = {}) {
    let { startTime, endTime, offset = 8, type = 'year' } = options
    if (type === 'year') {
      let date = new Date(Math.abs(+endTime - +startTime) - offset * 1e3 * 3600)
      return {
        year: date.getFullYear() - 1970,
        month: date.getMonth(),
        day: date.getDate() - 1,
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      }
    }
    if (type === 'day') {
      let timestamp = Math.abs(+endTime - +startTime)
      let day = Math.floor(timestamp / (24 * 3600e3))
      let date = new Date(timestamp - day * 24 * 3600e3 - offset * 1e3 * 3600)
      return {
        day,
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      }
    }
  }
  getWeek() {
    Date.prototype.getWeek = function(weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']) {
      return weeks[this.getDay()]
    }
  }
}