// Site data                                                                                                                                                  
const siteData = {
  title: 'Web Design III',
  color: 'forestgreen',
  menu: {
    'documents': 'https://docs.google.com/document/d/1qRmnBFHDTONOIpIWSvT9bYkBgVEtPwgU3VlSAlzbhGA/edit?usp=sharing',
    'slides': 'https://docs.google.com/presentation/d/1Fz0xDibDqD2W1s2wBNBnheQzVKvjkqVPPcNTN8_bhKM/edit?usp=sharing',
    'are.na': 'https://are.na/ian-mcdonald/we-should-talk-about-this-website'
  }
}


// Set the color                                                                                                                                              
document.body.style.color = siteData.color

// Set site title
document.title = siteData.title
document.querySelector('h1').textContent = siteData.title

// Set up nav
let nav = document.querySelector('nav')
for (let property in siteData.menu) {
  if (siteData.menu.hasOwnProperty(property)) {
    let urlsafe = property.replace(/ /gi, '-')
    let link = document.createElement('a')
    let txt = document.createTextNode(property)
    link.classList.add(urlsafe)
    link.setAttribute('href', '#'+ property)    
    link.appendChild(txt)
    nav.appendChild(link)
    let bk = siteData.menu[property]
  }
}

// Check if mobile
let mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mobile = true
} 

// Make dev tools mobile view work on resize
window.addEventListener('resize', () => {
  let temp = mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true
  } else {
    mobile = false
  }
  if (temp != mobile) {
    location.reload()
  }
})

// Display frame of selected doc
function locationHashChanged() {
  let item = window.location.hash
  item = item.replace('#','')
  item = decodeURI(item)

  if (siteData.menu.hasOwnProperty(item)){
    document.querySelector('#backgrnd').setAttribute('src', siteData.menu[item])
    var urlsafe = item.replace(/ /gi, '-')
  } else {
    //load the first one
    document.querySelector('#backgrnd').setAttribute('src', siteData.menu[Object.keys(siteData.menu)[0]])
    var urlsafe = item.replace(/ /gi, '-')
  }
  document.querySelector('iframe').focus()
}
locationHashChanged()
window.onhashchange = locationHashChanged
