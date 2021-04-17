module.exports = {
  remainingDays(job) {
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
  
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() +  Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)
  
    const timeDiffInMs = dueDateInMs - Date.now()
  
    // transformando milli em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    const dayDiffFormat = dayDiff < 0 ? 0 : dayDiff
  
    return dayDiffFormat // dias restantes
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}