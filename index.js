const formatNumber = number => `${number < 10 ? 0 : ''}${number}`

setInterval(() => {
  const date = new Date()
  document.querySelector('#time').textContent = 
  `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`
}, 1000);