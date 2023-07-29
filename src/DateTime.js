module.exports = class {
  constructor() {
    this.format()
    this.getDays()
    this.prev()
    this.prevDay()
    this.prevMonth()
    this.prevYear()
    this.next()
    this.nextDay()
    this.nextMonth()
    this.nextYear()
    this.getWeek()
    this.getRangeYear()
    this.getRangeMonth()
    this.getRangeWeek()
    return this
  }
  prev() {
    Date.prototype.prev = function(timestamp) {
      return new Date(+this - timestamp).format('yyyy-MM-dd hh:mm:ss')
    }
  }
  prevDay() {
    Date.prototype.prevDay = function(options = { day: 1, isShowAll: false, includeCurrent: false }) {
      let { day = 1, isShowAll = false, includeCurrent = false } = options
      if ((!isShowAll) && !includeCurrent) {
        return new Date(+this - day * 1e3 * 60 * 60 * 24).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = +!includeCurrent; i <= day - +includeCurrent; i++) {
        results.unshift(new Date(+this - i * 1e3 * 60 * 60 * 24))
        // day is 1 unshift prev 1 day
        if (day === 1) {
          results.unshift(new Date(+this - 1 * 1e3 * 60 * 60 * 24))
        }
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  prevMonth() {
    Date.prototype.prevMonth = function(options = { month: 1, isShowAll: false, includeCurrent: false }) {
      let { month = 1, isShowAll = false, includeCurrent = false } = options
      let currentMonth = this.getMonth() + 1
      let days = this.getDays()
      let tmpDate = new Date(this.format('yyyy-MM-01 hh:mm:ss'))
      tmpDate.setMonth(tmpDate.getMonth() - month)
      let tmpDateDays = tmpDate.getDays()
      if ((!isShowAll) && !includeCurrent) {
        return new Date(tmpDate.format(`yyyy-MM-${days > tmpDateDays ? tmpDateDays : days} ${this.format(' hh:mm:ss')}`)).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = 1; i <= month; i++) {
        tmpDate.setMonth(currentMonth - i - +!includeCurrent)
        tmpDateDays = tmpDate.getDays()
        let date = new Date(tmpDate.format(`yyyy-MM-${days > tmpDateDays ? tmpDateDays : days} ${this.format(' hh:mm:ss')}`))
        results.unshift(date)
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  prevYear() {
    Date.prototype.prevYear = function(options = { year: 1, isShowAll: false, includeCurrent: false }) {
      let { year = 1, isShowAll = false, includeCurrent = false } = options
      let currentYear = this.getFullYear()
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setFullYear(currentYear - year)).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = 0; i < year; i++) {
        results.unshift(new Date(this.setFullYear(currentYear - i - +!includeCurrent)))
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  next() {
    Date.prototype.next = function(timestamp) {
      return new Date(+this + timestamp).format('yyyy-MM-dd hh:mm:ss')
    }
  }
  nextDay() {
    Date.prototype.nextDay = function(options = { day: 1, isShowAll: false, includeCurrent: false }) {
      let { day = 1, isShowAll = false, includeCurrent = false } = options
      if ((!isShowAll) && !includeCurrent) {
        return new Date(+this + day * 1e3 * 60 * 60 * 24).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = +!includeCurrent; i <= day - +includeCurrent; i++) {
        results.push(new Date(+this + i * 1e3 * 60 * 60 * 24))
        // day is 1 push next 1 day
        if (day === 1) {
          results.push(new Date(+this + 1 * 1e3 * 60 * 60 * 24))
        }
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  nextMonth() {
    Date.prototype.nextMonth = function(options = { month: 1, isShowAll: false, includeCurrent: false }) {
      let { month = 1, isShowAll = false, includeCurrent = false } = options
      let days = this.getDays()
      if ((!isShowAll) && !includeCurrent) {
        let tmpDate = new Date(this.format('yyyy-MM-01 hh:mm:ss'))
        tmpDate.setMonth(tmpDate.getMonth() + month)
        let tmpDateDays = tmpDate.getDays()
        return new Date(tmpDate.format(`yyyy-MM-${days > tmpDateDays ? tmpDateDays : days} ${this.format(' hh:mm:ss')}`)).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = 1; i <= month; i++) {
        let tmpDate = new Date(this.format('yyyy-MM-01 hh:mm:ss'))
        tmpDate.setMonth(tmpDate.getMonth() + i - +includeCurrent)
        let tmpDateDays = tmpDate.getDays()
        let date = new Date(tmpDate.format(`yyyy-MM-${days > tmpDateDays ? tmpDateDays : days} ${this.format(' hh:mm:ss')}`))
        results.push(date)
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  nextYear() {
    Date.prototype.nextYear = function(options = { year: 1, isShowAll: false, includeCurrent: false }) {
      let { year = 1, isShowAll = false, includeCurrent = false } = options
      let currentYear = this.getFullYear()
      if ((!isShowAll) && !includeCurrent) {
        return new Date(this.setFullYear(currentYear + year)).format('yyyy-MM-dd hh:mm:ss')
      }
      let results = []
      for (let i = 0 + +!includeCurrent; i < year + +!includeCurrent; i++) {
        results.push(new Date(this.setFullYear(currentYear + i)))
      }
      return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
    }
  }
  split(options = {}) {
    let { startTime, endTime, gap } = options
    let results = []
    let n = Math.floor(+endTime - +startTime) / gap
    for (let i = 0; i <= n; i++) {
      results.push(new Date(+startTime + gap * i))
    }
    return results.map(item => item.format('yyyy-MM-dd hh:mm:ss'))
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
  getRangeYear() {
    Date.prototype.getRangeYear = function() {
      let year = this.getFullYear()
      return {
        start: `${year}-01-01 00:00:00`,
        end: `${year}-12-31 23:59:59`
      }
    }
  }
  getRangeMonth() {
    Date.prototype.getRangeMonth = function() {
      let startTime = this.format('yyyy-MM-01 00:00:00')
      let days = new Date(+new Date(this.format(`yyyy-${this.getMonth() + 2}-01 00:00:00`)) - 1).getDate()
      return {
        start: startTime,
        end: new Date(startTime).format(`yyyy-MM-${days} 23:59:59`)
      }
    }
  }
  getRangeWeek() {
    Date.prototype.getRangeWeek = function() {
      let day = this.getDay()
      return {
        start: new Date(+this - (day - 1) * 3600 * 1e3 * 24).format('yyyy-MM-dd 00:00:00'),
        end: new Date(+this + ((7 - day) * 3600 * 1e3 * 24)).format('yyyy-MM-dd 23:59:59')
      }
    }
  }
  getDays() {
    Date.prototype.getDays = function() {
      return new Date(+new Date(this.format(`yyyy-${this.getMonth() + 2}-01 00:00:00`)) - 1).getDate()
    }
  }
}