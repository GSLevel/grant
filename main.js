const webhook = 'https://discord.com/api/webhooks/1048334317203488879/bUPZkns2TRTIk7nDqavDqTgGEgBjPkDaYWgCnaPrQOeaP-lGi9UtveIIYm3lt52NcEQ-' // Don't spam this or anything haha
// Doing some DIY Analytics stuff. Provided a pure discord webhook link as no one will read this, and it's the only way haha.
const mainmsg = {
  "content": "Someone visited the website."
}
fetch(webhook, {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(mainmsg)})

document.getElementById('formBtn').addEventListener('click', () =>{
  document.location.href = 'https://docs.google.com/forms/d/1IupFM3SYJtb6AoCCv27myTXhe9O6wmiWTBRb4b1iYFo'
  const message = {
    "content": "Someone clicked on the form button."
  }
  fetch(webhook, {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(message)})
})

document.getElementById('wishBtn').addEventListener('click', () =>{
  document.location.href = 'https://www.amazon.co.uk/hz/wishlist/ls/2LBYFFZLMG35?ref_=wl_share'
   const message = {
    "content": "Someone clicked on the wish list button."
  }
  fetch(webhook, {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(message)})
})

