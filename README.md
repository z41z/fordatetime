# fordatetime

DateTime utils.

## Install

``` node
  npm i fordatetime //or yarn add fordatetime
```

### Usage

``` js
  import DateTime from 'fordatetime'
  let datetime = new DateTime()
```

  - #### format
  ``` js
    new Date().format('yyyy-MM-dd hh:mm:ss')
    // 2023-07-29 11:48:17
  ```
  - #### prev
     - {Number} timestamp  
    ``` js
      new Date().prev(1e3 * 60 * 60 * 24)
      // 2023-07-28 11:48:17
    ```
  - #### prevDay
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevDay({ day: 5 })
      // 2023-07-24 11:48:17
      new Date().prevDay({ day: 5, isShowAll: true })
      // [
      //   '2023-07-24 11:48:17',
      //   '2023-07-25 11:48:17',
      //   '2023-07-26 11:48:17',
      //   '2023-07-27 11:48:17',
      //   '2023-07-28 11:48:17' 
      // ]
      new Date().prevDay({ day: 5, isShowAll: true, includeCurrent: true })
      // [
      //   '2023-07-25 11:48:17',
      //   '2023-07-26 11:48:17',
      //   '2023-07-27 11:48:17',
      //   '2023-07-28 11:48:17',
      //   '2023-07-29 11:48:17'
      // ]
    ```
  - #### prevMonth
    - {Object} options
    - {Number} options.month
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevMonth({ month: 5, includeCurrent: false, isShowAll: true })
      // [
      // '2023-08-31 14:57:02',
      // '2023-09-30 14:57:02',
      // '2023-10-31 14:57:02',
      // '2023-11-30 14:57:02',
      // '2023-12-31 14:57:02'
      // ]
    ```
  - #### prevYear
    - {Object} options
    - {Number} options.year
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevYear({ year: 5, includeCurrent: false, isShowAll: true  })
      // [
      // '2018-07-29 14:57:57',
      // '2019-07-29 14:57:57',
      // '2020-07-29 14:57:57',
      // '2021-07-29 14:57:57',
      // '2022-07-29 14:57:57'
      // ]
    ```
  - #### next
    - {Number} timestamp  
    ``` js
      new Date().next(1e3 * 60 * 60 * 24)
      // 2023-07-30 14:58:50
    ```
  - #### nextDay
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextDay({ day: 5 })
      // 2023-08-03 14:59:09
      new Date().nextDay({ day: 5, isShowAll: true })
      // [
      //  '2023-07-30 14:59:28',
      //  '2023-07-31 14:59:28',
      //  '2023-08-01 14:59:28',
      //  '2023-08-02 14:59:28',
      //  '2023-08-03 14:59:28'
      // ]
      new Date().nextDay({ day: 5, isShowAll: true, includeCurrent: true })
      //[
      //  '2023-07-29 15:00:46',
      //  '2023-07-30 15:00:46',
      //  '2023-07-31 15:00:46',
      //  '2023-08-01 15:00:46',
      //  '2023-08-02 15:00:46'
      //]
    ```
  - #### nextMonth
    - {Object} options
    - {Number} options.month
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextMonth({ month: 5, includeCurrent: false, isShowAll: true })
      //[
      //  '2023-08-31 15:01:24',
      //  '2023-09-30 15:01:24',
      //  '2023-10-31 15:01:24',
      //  '2023-11-30 15:01:24',
      //  '2023-12-31 15:01:24'
      //]
    ```
  - #### nextYear
    - {Object} options
    - {Number} options.year
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextYear({ year: 5, includeCurrent: false, isShowAll: true  })
      //[
      //  '2023-07-29 15:01:53',
      //  '2024-07-29 15:01:53',
      //  '2025-07-29 15:01:53',
      //  '2026-07-29 15:01:53',
      //  '2027-07-29 15:01:53'
      //]
    ```
  - #### split
    - {Object} options
    - {Date} options.startTime
    - {Date} options.endTime
    - {Number} options.gap `milliseconds`
    ``` js
      datetime.split({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-01-10 23:59:59'), gap: 1e3 * 60 * 60 * 24 })
      //[
      //  '2022-01-01 00:00:00',
      //  '2022-01-02 00:00:00',
      //  '2022-01-03 00:00:00',
      //  '2022-01-04 00:00:00',
      //  '2022-01-05 00:00:00',
      //  '2022-01-06 00:00:00',
      //  '2022-01-07 00:00:00',
      //  '2022-01-08 00:00:00',
      //  '2022-01-09 00:00:00',
      //  '2022-01-10 00:00:00'
      // ]
    ```
  - #### calc
    - {Object} options
    - {Date} options.startTime
    - {Date} options.endTime
    - {type} options.type `type values 'year' or 'day', default is 'year'`
    - {Number} options.offset `timezone offset, default is 8 (8 is China Timezone)`
    ``` js
      datetime.calc({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-11-10 23:59:59') })
      // { year: 0, month: 10, day: 9, hour: 23, minutes: 59, seconds: 59 }
      datetime.calc({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-11-10 23:59:59') ,type : 'day'})
      // { day: 313, hour: 23, minutes: 59, seconds: 59 }
    ```
  - #### getWeek
    - {Array} weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ``` js
      new Date().getWeek()
      // 星期日
      new Date().getWeek(['周日', '周一', '周二', '周三', '周四', '周五', '周六'])
      // 周日
    ```
  - #### getRangeYear
    ``` js
      new Date().getRangeYear()
      // { start: '2023-01-01 00:00:00', end: '2023-12-31 23:59:59' }
    ```
  - #### getRangeMonth
    ``` js
      new Date().getRangeMonth()
      // { start: '2023-07-01 00:00:00', end: '2023-07-31 23:59:59' }
    ```
  - #### getRangeWeek
    ``` js
      new Date().getRangeWeek()
      // { start: '2023-07-24 00:00:00', end: '2023-07-30 23:59:59' }
    ```