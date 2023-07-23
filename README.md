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
    // 2023-07-23 21:38:31
  ```
  - #### prev
     - {Number} timestamp  
    ``` js
      new Date().prev(1e3 * 60 * 60 * 24)
      // 2023-07-22T13:38:31.839Z
    ```
  - #### prevDay
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevDay({ day: 5 })
      // 2023-07-18T13:38:31.841Z
      new Date().prevDay({ day: 5, isShowAll: true })
      // [
      //  2023-07-22T13:38:31.841Z,
      //  2023-07-21T13:38:31.841Z,
      //  2023-07-20T13:38:31.841Z,
      //  2023-07-19T13:38:31.841Z,
      //  2023-07-18T13:38:31.841Z 
      // ]
      new Date().prevDay({ day: 5, isShowAll: true, includeCurrent: true })
      // [
      //  2023-07-23T13:38:31.842Z,
      //  2023-07-22T13:38:31.842Z,
      //  2023-07-21T13:38:31.842Z,
      //  2023-07-20T13:38:31.842Z,
      //  2023-07-19T13:38:31.842Z
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
      //  2023-06-23T13:38:31.843Z,
      //  2023-05-23T13:38:31.844Z,
      //  2023-04-23T13:38:31.844Z,
      //  2023-03-23T13:38:31.844Z,
      //  2023-02-23T13:38:31.844Z
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
      //  2022-07-23T13:38:31.846Z,
      //  2021-07-23T13:38:31.846Z,
      //  2020-07-23T13:38:31.846Z,
      //  2019-07-23T13:38:31.846Z,
      //  2018-07-23T13:38:31.846Z
      // ]
    ```
  - #### next
    - {Number} timestamp  
    ``` js
      new Date().next(1e3 * 60 * 60 * 24)
      // 2023-07-24T13:38:31.848Z
    ```
  - #### nextDay
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextDay({ day: 5 })
      // 2023-07-28T13:38:31.848Z
      new Date().nextDay({ day: 5, isShowAll: true })
      // [
      //  2023-07-24T13:38:31.849Z,
      //  2023-07-25T13:38:31.849Z,
      //  2023-07-26T13:38:31.849Z,
      //  2023-07-27T13:38:31.849Z,
      //  2023-07-28T13:38:31.849Z
      // ]
      new Date().nextDay({ day: 5, isShowAll: true, includeCurrent: true })
      // [
      //  2023-07-23T13:38:31.849Z,
      //  2023-07-24T13:38:31.849Z,
      //  2023-07-25T13:38:31.849Z,
      //  2023-07-26T13:38:31.849Z,
      //  2023-07-27T13:38:31.849Z
      // ]
    ```
  - #### nextMonth
    - {Object} options
    - {Number} options.month
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextMonth({ month: 5, includeCurrent: false, isShowAll: true })
      // [
      //  2023-08-23T13:38:31.851Z,
      //  2023-09-23T13:38:31.851Z,
      //  2023-10-23T13:38:31.851Z,
      //  2023-11-23T13:38:31.851Z,
      //  2023-12-23T13:38:31.851Z
      // ]
    ```
  - #### nextYear
    - {Object} options
    - {Number} options.year
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextYear({ year: 5, includeCurrent: false, isShowAll: true  })
      // [
      //  2022-07-23T13:38:31.852Z,
      //  2023-07-23T13:38:31.852Z,
      //  2024-07-23T13:38:31.852Z,
      //  2025-07-23T13:38:31.852Z,
      //  2026-07-23T13:38:31.852Z
      // ]
    ```
  - #### split
    - {Object} options
    - {Date} options.startTime
    - {Date} options.endTime
    - {Number} options.gap `milliseconds`
    ``` js
      datetime.split({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-01-10 23:59:59'), gap: 1e3 * 60 * 60 * 24 })
      // [
      //  2021-12-31T16:00:00.000Z,
      //  2022-01-01T16:00:00.000Z,
      //  2022-01-02T16:00:00.000Z,
      //  2022-01-03T16:00:00.000Z,
      //  2022-01-04T16:00:00.000Z,
      //  2022-01-05T16:00:00.000Z,
      //  2022-01-06T16:00:00.000Z,
      //  2022-01-07T16:00:00.000Z,
      //  2022-01-08T16:00:00.000Z,
      //  2022-01-09T16:00:00.000Z
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