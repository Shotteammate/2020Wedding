
//delegation onclick 
section.onclick = function(event) {
    let imgObj = event.target.closest('img'); 
    //let imgItem = 

    if (!imgObj) return;
    if (!section.contains(imgObj)) return; 
    // go to gallery page or youtube page
    visitPage(imgObj); 
};
// go to gallery page or youtube page functino
function visitPage(imgObj) {
    let addr = imgObj.alt;
    window.location.href = addr+".html";
}

//lazy loading images
const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    //IntersectionObserverEntry
    console.log(entries)
    entries.forEach(entry => {
      console.log('lazy loading images');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);

//google map api
function initMap(){
  // Map options
  var options = {
    zoom:13,
    center:{lat:26.5929148,lng:127.9574133}
  }

  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  let markers = [
    {coords:{lat:26.60345, lng:127.93623}},
    {coords:{lat:26.6024144,lng:127.9400584}},
  ];

  // Loop through markers
  for(let i = 0; i < markers.length; i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
    });
  }
}
