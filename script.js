const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
 textarea.focus()
 textarea.addEventListener('keyup',(e) => {
      createtags(e.target.value)
      if(e.key === 'Enter'){
           setTimeout(()=>{
                e.target.value =''
           },10)
      }
 })
 function createtags(input){
      const tags = input.split(',').filter(tag=> tag.trim() !== '').map(tag=> tag.trim())
      tagsEl.innerHTML = ''
      tags.forEach(tag => {
       const tagsEl = document.getElementById('span')
       tagsEl.classList.add('tag')
       tagsEl.innerText =tag 
       tagsEl.appendChild(tagEl)   
      });

 }
 function randomselect(){
      const times = 30
      const interval = setInterval(()=>{
           const randomtag = pickRandomTag()
           highlightTag(randomTag)
           setTimeout(()=>{
                unhighlightTag(randomTag)
           },100)
      },100);

      setTimeout(()=>{
         clearInterval(interval)
         setTimeout(()=>{
              const randomTag=pickRandomTag()
              highlightTag(randomTag)

         },100)
      },times*100)
 }
 function pickRandomTag(){
      const tags = document.querySelectorAll('.tag')
      return tags[Math.floor(Math.random()*tags.length)]
 }
 function highlightTag(tag){
      tag.classList.add('highlight')
 }
 function unhighlightTag(tag){
      tag.classList.remove('highlight')
 }