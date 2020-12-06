import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styles from './index.module.scss'

const Time = () => {
  const [time, setTime] = useState(moment().format('hh:mm:ss'))
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = moment().format('hh:mm:ss')
      setTime(currentTime)
    }, 500)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div className={styles.container}>
      <span className={styles.time}>{time}</span>
    </div>
  )
}

export default Time
